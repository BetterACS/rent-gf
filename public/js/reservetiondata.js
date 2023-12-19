document.addEventListener('DOMContentLoaded', function () {
    var comlink = document.getElementById('send');

    comlink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/confirm';
    });
});

const reForm = document.forms["reservation"];

reForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("username", reForm.username.value);
    formData.append("friendtal", reForm.friendtal.value);
    formData.append("email", reForm.email.value);
    formData.append("Date", reForm.date.value);
    formData.append("payment_type", reForm.payment.value);
    formData.append("plan", document.getElementById("planSelect").value);
    formData.append("detail", reForm.detail.value);

    reHandle(formData);
    reForm.reset();
});

function reHandle(formData) {
    fetch("/reservation", {
        method: "POST",  // Corrected the HTTP method to "POST"
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            window.location.href = '/confirm';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred');
    });
}
