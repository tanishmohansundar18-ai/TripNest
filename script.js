function showFlights(){

document.getElementById("flightBox")
.classList.remove("hidden");

document.getElementById("hotelBox")
.classList.add("hidden");

document.getElementById("packageBox")
.classList.add("hidden");
}

function showHotels(){

document.getElementById("hotelBox")
.classList.remove("hidden");

document.getElementById("flightBox")
.classList.add("hidden");

document.getElementById("packageBox")
.classList.add("hidden");
}

function showPackages(){

document.getElementById("packageBox")
.classList.remove("hidden");

document.getElementById("flightBox")
.classList.add("hidden");

document.getElementById("hotelBox")
.classList.add("hidden");
}

function openLogin(){

document.getElementById("loginModal")
.style.display = "flex";
}

function loginUser(){

const username =
document.getElementById("username").value;

if(username == ""){

alert("Enter username");

return;
}

alert(
"Welcome to TripNest, " + username
);

document.getElementById("loginModal")
.style.display = "none";
}

function closeReceipt(){

document.getElementById("receiptModal")
.style.display = "none";
}

function searchFlights(){

const airlines = [

"Emirates",
"Air India",
"Air Asia",
"IndiGo",
"SpiceJet",
"Singapore Airlines",
"Etihad",
"Qatar Airways"

];

const timings = [

"06:30 AM",
"09:45 AM",
"01:15 PM",
"05:40 PM",
"10:00 PM"

];

const seatTypes = [

"Economy",
"Premium Economy",
"Business Class"

];

const results =
document.getElementById("flightResults");

results.innerHTML = "";

for(let i=0;i<6;i++){

const airline =
airlines[
Math.floor(
Math.random() * airlines.length
)
];

const timing =
timings[
Math.floor(
Math.random() * timings.length
)
];

const seat =
seatTypes[
Math.floor(
Math.random() * seatTypes.length
)
];

const price =
Math.floor(
Math.random() * 900
) + 250;

results.innerHTML += `

<div class="flight-card">

<div>

<h3>

${airline}

</h3>

<p>

Departure:
${timing}

</p>

<p>

Seat:
${seat}

</p>

<p>

Price:
$${price}

</p>

</div>

<button onclick="bookFlight(
'${airline}',
'${seat}',
${price}
)">

Book Flight

</button>

</div>

`;
}

window.scrollTo({

top:
document.querySelector(".results")
.offsetTop,

behavior:"smooth"

});
}

function bookFlight(
airline,
seat,
price
){

document.getElementById("receiptContent")
.innerHTML = `

<p>

<strong>Airline:</strong>
${airline}

</p>

<p>

<strong>Seat Type:</strong>
${seat}

</p>

<p>

<strong>Total Price:</strong>
$${price}

</p>

`;

document.getElementById("receiptModal")
.style.display = "flex";
}

function bookHotel(
hotel,
price
){

document.getElementById("receiptContent")
.innerHTML = `

<p>

<strong>Hotel:</strong>
${hotel}

</p>

<p>

<strong>Luxury Stay Included</strong>

</p>

<p>

<strong>Total Price:</strong>
$${price}

</p>

`;

document.getElementById("receiptModal")
.style.display = "flex";
}
