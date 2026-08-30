// ===============================
// HOTEL BOOKING WEBSITE
// JavaScript
// ===============================


// Get the search form
const searchForm = document.getElementById("searchForm");


// Search form submit
searchForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get values
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;


    // Check whether dates are selected
    if (checkin === "" || checkout === "") {

        alert("Please select check-in and check-out dates.");

        return;
    }


    // Convert dates
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);


    // Check checkout date
    if (checkoutDate <= checkinDate) {

        alert("Check-out date must be after check-in date.");

        return;
    }


    // Save search information
    localStorage.setItem("checkin", checkin);
    localStorage.setItem("checkout", checkout);
    localStorage.setItem("guests", guests);


    // Show success message
    alert(
        "Search successful!\n\n" +
        "Check-in: " + checkin +
        "\nCheck-out: " + checkout +
        "\nGuests: " + guests
    );


    // Open rooms page
    window.location.href = "rooms.html";

});


// ===============================
// SET MINIMUM DATE
// ===============================

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayDate = `${year}-${month}-${day}`;


// Set today's date as minimum
document.getElementById("checkin").min = todayDate;
document.getElementById("checkout").min = todayDate;


// ===============================
// CHECK-IN DATE CHANGE
// ===============================

document.getElementById("checkin").addEventListener("change", function () {

    const selectedDate = this.value;

    // Checkout cannot be before check-in
    document.getElementById("checkout").min = selectedDate;

});