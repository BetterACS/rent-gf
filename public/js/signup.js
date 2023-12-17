document.addEventListener('DOMContentLoaded', function () {
    var signupLink = document.getElementById('loginLink');

    signupLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/login';
    });
});


const regForm = document.forms["register"];

regForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("email", regForm.email.value);
    formData.append("username", regForm.username.value);
    formData.append("tel", regForm.tel.value);
    formData.append("age", regForm.age.value);
    formData.append("gender", regForm.gender.value);
    formData.append("password", regForm.password.value);

    regHandle(formData);
    regForm.reset();
});

function regHandle(formData) {
    fetch("/signup", {
        method: "post",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            window.location.href = '/login';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred');
    });
}


