document.getElementById('del').addEventListener('click', function () {
    // Confirm with the user before proceeding with the deletion
    const confirmDelete = confirm('Are you sure you want to delete your account?');
    
    if (confirmDelete) {
        // Send a request to the server to delete the user account
        fetch('/user/delete', {
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
                    console.error('Error deleting account. Server response:', response);
                }
            })
            .catch(error => console.error('Error:', error));
    }
});