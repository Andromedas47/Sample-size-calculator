function calculateSample() {
    // Get input values
    const N = parseFloat(document.getElementById("populationSize").value);
    const e = parseFloat(document.getElementById("marginOfError").value);

    // Check if inputs are valid
    if (isNaN(N) || isNaN(e) || N <= 0 || e <= 0) {
        alert("Please enter valid numbers for N and e.");
        return;
    }

    // Formula for calculating sample size
    const eSquared = e ** 2;
    const n = N / (1 + (N * eSquared));

    // Display result
    document.getElementById("sampleSize").textContent = n.toFixed(2);
}
