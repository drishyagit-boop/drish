// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// =========================
// ORDER POPUP
// =========================

function orderBouquet(bouquetName) {

    const popup =
        document.getElementById("orderPopup");

    const selected =
        document.getElementById("selectedBouquet");

    selected.textContent =
        "You selected: " + bouquetName;

    popup.classList.add("active");

    document
        .getElementById("orderMessage")
        .textContent = "";

}


function closePopup() {

    document
        .getElementById("orderPopup")
        .classList.remove("active");

}


// Confirm order

function confirmOrder() {

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const message =
        document.getElementById("orderMessage");

    if (name === "" || phone === "") {

        message.style.color = "#c0392b";

        message.textContent =
            "Please enter your name and phone number.";

        return;

    }

    message.style.color = "#4f965c";

    message.textContent =
        "Thank you, " + name +
        "! Your order request has been received.";

}


// =========================
// CONTACT FORM
// =========================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const message =
            document.getElementById("formMessage");

        message.textContent =
            "Thank you, " + name +
            "! We will contact you soon.";

        this.reset();

    });


// =========================
// CLOSE POPUP WHEN CLICKING OUTSIDE
// =========================

document
    .getElementById("orderPopup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });
