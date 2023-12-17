document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for logout button
    var logoutButton = document.getElementById('logoutlink');

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            // Send a request to the server to log out
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/logout', true);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Redirect to the login page or any other page
                    window.location.href = '/'; // Change '/login' to the desired page
                } else {
                    console.error('Error logging out:', xhr.statusText);
                    // Handle error, display a message, etc.
                }
            };

            xhr.onerror = function () {
                console.error('Network error occurred.');
                // Handle error, display a message, etc.
            };

            xhr.send();
        });
    }
});