function calculateNetSalary() {
    // Input basic salary and benefits
    const basicSalary = Number(prompt("Enter basic salary:"));
    const benefits = Number(prompt("Enter benefits:"));

    // Tax rates (PAYE) effective from July 1, 2023
    const taxRates = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 25 },
        { min: 32334, max: 500000, rate: 30 },
        { min: 500001, max: 800000, rate: 32.5 },
        { min: 800001, max: Infinity, rate: 35 },
    ];

    // NHIF rates effective from April 1, 2015
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 },
    ];

    // NSSF rates (Tier I and Tier II) effective from January 10, 2014
    const nssfRateTierI = 0.06; // 6% for Tier I
    const nssfRateTierII = 0.06; // 6% for Tier II

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax (PAYE)
    let tax = 0;
    for (const rate of taxRates) {
        if (grossSalary > rate.max) {
            tax += (rate.max - rate.min) * (rate.rate / 100);
        } else {
            tax += (grossSalary - rate.min) * (rate.rate / 100);
            break;
        }
    }

    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (grossSalary > rate.max) {
            nhifDeduction = rate.deduction;
        } else {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    // Calculate NSSF deduction
    const nssfDeductionTierI = Math.min(6000, grossSalary) * nssfRateTierI;
    const nssfDeductionTierII = Math.min(18000, Math.max(0, grossSalary - 6000)) * nssfRateTierII;
    const nssfDeduction = nssfDeductionTierI + nssfDeductionTierII;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

   // Combine the salary breakdown into one alert
    alert(`Salary Breakdown:
    Gross Salary: ${grossSalary}
    Tax Deduction (PAYE): ${tax}
    NHIF Deduction: ${nhifDeduction}
    NSSF Deduction: ${nssfDeduction}
    Net Salary: ${netSalary}`);

}

// Call the function to calculate net salary
calculateNetSalary();
