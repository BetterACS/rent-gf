// reservetiondata.js
import ConfirmInfo from './confirmclass.js';
export function getCurrentConfirmInfo() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: '/confirm/info',
            method: 'GET',
            success: function (data) {
                const confirmInfo = new ConfirmInfo(data.username, data.email, data.friendtal_Name, data.Date, data.detail, data.payment_type, data.plan, data.price);
                resolve(confirmInfo);
            },
            error: function (error) {
                reject('Error fetching Confirm info:', error);
            }
        });
    });
}

function displaySummary(ConfirmInfo) {

    if (document.querySelector('.user_name')) {
        const usernameElements = document.querySelectorAll('.user_name');
        usernameElements.forEach(function(usernameElement) {
            usernameElement.textContent = 'User Name: ' + confirmInfo.username;
        });
    }

    if (document.querySelector('.friendtal')) {
        const friendtalElements = document.querySelectorAll('.friendtal');
        friendtalElements.forEach(function(friendtalElement) {
            friendtalElement.textContent = 'Friendtal: ' + confirmInfo.friendtal;
        });
    }

    if (document.querySelector('.date')) {
        const dateElements = document.querySelectorAll('.date');
        dateElements.forEach(function(dateElement) {
            // Format the date as "dd-mm-yyyy"
            const dateObject = new Date(confirmInfo.date);
            const day = String(dateObject.getDate()).padStart(2, '0');
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const year = dateObject.getFullYear();

            const formattedDate = `${day}-${month}-${year}`;
            dateElement.textContent = 'Date: ' + formattedDate;
        });
    }

    if (document.querySelector('.your_email')) {
        const yourEmailElements = document.querySelectorAll('.your_email');
        yourEmailElements.forEach(function(yourEmailElement) {
            yourEmailElement.textContent = 'Your Email: ' + confirmInfo.email;
        });
    }

    if (document.querySelector('.plan')) {
        const userChordNumElements = document.querySelectorAll('.plan');

        userChordNumElements.forEach(function(userChordNumElement) {
            userChordNumElement.textContent = ConfirmInfo.tel;
        });
    }

    if (document.querySelector('.payment')) {
        const paymentElements = document.querySelectorAll('.payment');
        paymentElements.forEach(function(paymentElement) {
            paymentElement.textContent = 'Payment: ' + confirmInfo.payment_type;
        });
    }
    

    if (document.querySelector('.price')) {
        const priceElements = document.querySelectorAll('.price');
        priceElements.forEach(function(priceElement) {
            priceElement.textContent = 'Price: ' + confirmInfo.price;
        });
    }

    if (document.querySelector('.detail')) {
        const detailElements = document.querySelectorAll('.detail');
        detailElements.forEach(function(detailElement) {
            detailElement.textContent = 'Detail: ' + confirmInfo.detail;
        });
    }

}
export function setupUserDisplay() {
    // Call the getCurrentConfirmInfo function when the page loads
    $(document).ready(function () {
        getCurrentConfirmInfo()
            .then(function (ConfirmInfo) {
                displaySummary(ConfirmInfo);
            })
            .catch(function (error) {
                console.error(error);
            });
    });
}

// Call the getCurrentConfirmInfo function when the page loads
$(document).ready(function () {
    getCurrentConfirmInfo()
    .then(function(ConfirmInfo) {
        displaySummary(ConfirmInfo);
    })
    .catch(function(error) {
        console.error(error);
    });
});