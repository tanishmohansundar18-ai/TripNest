function showReceipt(){

    const from =
    document.getElementById("from").value;

    const to =
    document.getElementById("to").value;

    const departure =
    new Date(
    document.getElementById("departure").value
    );

    const returnDate =
    new Date(
    document.getElementById("returnDate").value
    );

    const travellers =
    parseInt(
    document.getElementById("travellers").value
    );

    if(
        isNaN(travellers)
        ||
        travellers <= 0
    ){

        alert("Please enter valid travellers");

        return;
    }

    const totalDays =
    (returnDate - departure)
    /
    (1000*60*60*24);

    if(totalDays <= 0){

        alert("Invalid travel dates");

        return;
    }

    const basePrice =
    180 * travellers * totalDays;

    const gst =
    basePrice * 0.10;

    const total =
    basePrice + gst;

    document.getElementById("receiptContent")
    .innerHTML = `

    <p>
    <strong>From:</strong>
    ${from}
    </p>

    <p>
    <strong>To:</strong>
    ${to}
    </p>

    <p>
    <strong>Travellers:</strong>
    ${travellers}
    </p>

    <p>
    <strong>Total Days:</strong>
    ${totalDays}
    </p>

    <p>
    <strong>GST:</strong>
    $${gst.toFixed(2)}
    </p>

    <h2 style="margin-top:20px;color:#1a73e8;">

    Total:
    $${total.toFixed(2)}

    </h2>

    `;

    document.getElementById("receiptModal")
    .style.display = "flex";
}

function closeModal(){

    document.getElementById("receiptModal")
    .style.display = "none";
}
