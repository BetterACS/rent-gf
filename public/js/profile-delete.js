// profile-delete.js
document.getElementById('del').addEventListener('click', function () {
    // Send a request to the server to delete the user account
    fetch('/profile/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // You can include additional data if needed
        body: JSON.stringify({}),
    })
        .then(response => {
            if (response.ok) {
                // Redirect to the login page or any other appropriate page
                window.location.href = '/login';
            } else {
                console.error('Error deleting account');
            }
        })
        .catch(error => console.error('Error:', error));
});
