$(document).ready(function() {
    $('.report-form').submit(function(e) {
        e.preventDefault();

        var username = $('#name').val();
        var message = $('#description').val(); // แก้ชื่อตัวแปร
        var email = $('#email').val();
        var problem = $('#subject').val();

        $.ajax({
            type: 'POST',
            url: '/report', // แก้ URL เป็น endpoint ที่เรากำหนดใน report.js
            data: { Username: username, Problem: problem, description: message, email: email },
            success: function(response) {
                console.log(response);
                redirectToprofile();
            },
            error: function(error) {
                console.error(error);
                // Handle error, e.g., display an error message
            }
        });
    });

    function redirectToprofile() {
        // Redirect to the home page after a delay (e.g., 2 seconds)
        setTimeout(function() {
            // alert("Report sent successfully");
            window.location.href = '/profile'; // Change the URL accordingly
        }, 200);
    }
});
