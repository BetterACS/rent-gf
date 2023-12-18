// edit.js
document.addEventListener("DOMContentLoaded", function () {
    const editForm = document.getElementById("editForm");

    // Add event listener to the Save button
    document.getElementById("saveChanges").addEventListener("click", function () {
        const formData = new FormData(editForm);
        formData.append("user_id", user_id);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("tel", tel);
        console.log(formData);
        // Use AJAX to send form data to the server
        fetch("/editprofile", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle success response, if needed
                console.log(data);

                // Optionally, you can redirect the user to the profile page
                window.location.href = "/profile";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });


});
