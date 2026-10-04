// Scroll to appointment section

function scrollToAppointment() {
    document.getElementById("appointment")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Appointment form

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        department === "" ||
        date === ""
    ) {
        document.getElementById("message").textContent =
            "Please fill all fields.";

        return;
    }

    document.getElementById("message").textContent =
        "Appointment booked successfully!";

    form.reset();
});
