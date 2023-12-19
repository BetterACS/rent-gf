// edit.js
document.addEventListener("DOMContentLoaded", function () {
    const editForm = document.getElementById("editForm");

    // Add event listener to the Save button
    document.getElementById("saveChanges").addEventListener("click", function () {
        const formData = new FormData(editForm);

        const user_id = formData.get("user_id");
        const username = formData.get("username");
        const email = formData.get("email");
        const tel = formData.get("tel");

        // Fetch existing user data from the server
        fetch("/editprofile")
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Compare form data with existing user data
                    const existingUserData = data.user;
                    if (user_id !== existingUserData.user_id) {
                        formData.set("user_id", user_id);
                    } else {
                        formData.delete("user_id");
                    }

                    if (username !== existingUserData.username) {
                        formData.set("username", username);
                    } else {
                        formData.delete("username");
                    }

                    if (email !== existingUserData.email) {
                        formData.set("email", email);
                    } else {
                        formData.delete("email");
                    }

                    if (tel !== existingUserData.tel) {
                        formData.set("tel", tel);
                    } else {
                        formData.delete("tel");
                    }

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
                } else {
                    console.error("Error fetching existing user data:", data.error);
                }
            })
            .catch((error) => {
                console.error("Error fetching existing user data:", error);
            });
    });
});
