document.addEventListener('DOMContentLoaded', function () {
    var comlink = document.getElementById('comlink');

    comlink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/confirm';
    });
});

const regForm = document.forms["reservation"];

regForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("username", regForm.username.value);
    formData.append("friendtal", regForm.friendtal.value);
    formData.append("email", regForm.email.value);
    formData.append("Date", regForm.date.value);
    formData.append("payment_type", regForm.payment_type.value);
    formData.append("plan", regForm.plan.value);
    formData.append("detail", regForm.detail.value);
    regHandle(formData);
    regForm.reset();
});

function regHandle(formData) {
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
