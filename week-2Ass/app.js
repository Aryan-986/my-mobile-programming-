function evaluatePerformance() {
    const scores = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    const aggregate = scores.reduce((sum, curr) => sum + curr, 0);
    const mean = aggregate / scores.length;

    const statsOutput = document.getElementById("statsDisplay");
    const statusOutput = document.getElementById("statusDisplay");

    statsOutput.textContent = `Aggregate Marks: ${aggregate} | Mean Score: ${mean.toFixed(2)}%`;

    if (mean >= 85) {
        statusOutput.textContent = "Overall Grade: Distinction (A)";
        statusOutput.style.color = "#28a745";
    } else if (mean >= 70) {
        statusOutput.textContent = "Overall Grade: Very Good (B)";
        statusOutput.style.color = "#17a2b8";
    } else if (mean >= 55) {
        statusOutput.textContent = "Overall Grade: Satisfactory (C)";
        statusOutput.style.color = "#ffc107";
    } else if (mean >= 40) {
        statusOutput.textContent = "Overall Grade: Pass (D)";
        statusOutput.style.color = "#fd7e14";
    } else {
        statusOutput.textContent = "Overall Grade: Needs Improvement (F)";
        statusOutput.style.color = "#dc3545";
    }
}