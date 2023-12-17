document.addEventListener('DOMContentLoaded', function () {
    var signupLink = document.getElementById('signupLink');

    signupLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = 'http://localhost:3000/signup';
    });
});

const loginForm = document.forms["login"];

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(loginForm.user_email.value);
    const formData = new FormData();

    formData.append("user_email", loginForm.user_email.value);
    formData.append("user_pass", loginForm.user_pass.value);

    loginHandle(formData);
    loginForm.reset();
});

function loginHandle(formData) {
    fetch("/login", {
        method: "post",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            window.location.href = 'http://localhost:3000/';
        }
    })
    .catch(error => {
        console.error(error);
        window.location.href = 'http://localhost:3000/';
    });
}