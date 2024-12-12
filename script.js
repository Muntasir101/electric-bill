function calculateBill() {
    const units = parseFloat(document.getElementById("units").value);
    const fixedCharge = 0; // Fixed charge in USD
    let bill = fixedCharge;
    let breakdown = "";

    if (isNaN(units) || units < 0) {
        document.getElementById("result").innerHTML = "Please enter a valid number of units.";
        return;
    }

    // Calculate charges for each tier
    if (units <= 100) {
        bill += units * 5; // $5 per kWh for first 100 units
        breakdown += `${units} units @ $5/kWh = $${(units * 5).toFixed(2)}<br>`;
    } else if (units <= 300) {
        bill += 100 * 5 + (units - 100) * 7; // $7 per kWh for 101–300 units
        breakdown += `100 units @ $5/kWh = $${(100 * 5).toFixed(2)}<br>`;
        breakdown += `${units - 100} units @ $7/kWh = $${((units - 100) * 7).toFixed(2)}<br>`;
    } else if (units <= 600) {
        bill += 100 * 5 + 200 * 7 + (units - 300) * 10; // $10 per kWh for 301–600 units
        breakdown += `100 units @ $5/kWh = $${(100 * 5).toFixed(2)}<br>`;
        breakdown += `200 units @ $7/kWh = $${(200 * 7).toFixed(2)}<br>`;
        breakdown += `${units - 300} units @ $10/kWh = $${((units - 300) * 10).toFixed(2)}<br>`;
    } else {
        bill += 100 * 5 + 200 * 7 + 300 * 10 + (units - 600) * 15; // $15 per kWh for above 600 units
        breakdown += `100 units @ $5/kWh = $${(100 * 5).toFixed(2)}<br>`;
        breakdown += `200 units @ $7/kWh = $${(200 * 7).toFixed(2)}<br>`;
        breakdown += `300 units @ $10/kWh = $${(300 * 10).toFixed(2)}<br>`;
        breakdown += `${units - 600} units @ $15/kWh = $${((units - 600) * 15).toFixed(2)}<br>`;
    }

    // Display the results
    document.getElementById("result").innerHTML = `
        <h3>Bill Breakdown</h3>
        ${breakdown}
        <p><strong>Total Bill: $${bill.toFixed(2)}</strong></p>
    `;
}
