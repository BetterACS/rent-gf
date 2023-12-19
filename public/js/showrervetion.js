import User from './deservatioclass.js';

export function getCurrentUser() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: '/user/info',
            method: 'GET',
            success: function (data) {
                const i = data[0];
                const reservation = new reservation(i.username, i.friendtal, i.date, i.email, i.plan, i.payment);
                resolve(user);  
            },
            error: function (error) {
                reject('Error fetching user info:', error);
            }
        });
    });
}


function displayUser(user) {

    if (document.querySelector('.user')) {
        const usernameElements = document.querySelectorAll('.user');

        usernameElements.forEach(function(usernameElement) {
            usernameElement.textContent = user.username;
        });
    }

    if (document.querySelector('.friendtal')) {
        const userEmailElements = document.querySelectorAll('.friendtal');

        userEmailElements.forEach(function(userEmailElement) {
            userEmailElement.textContent = user.friendtal;
        });
    }

    if (document.querySelector('.date')) {
        const userPostNumElements = document.querySelectorAll('.date');

        userPostNumElements.forEach(function(userPostNumElement) {
            userPostNumElement.textContent = user.date;
        });
    }

    if (document.querySelector('.gen')) {
        const userChordNumElements = document.querySelectorAll('.email');

        userChordNumElements.forEach(function(userChordNumElement) {
            userChordNumElement.textContent = user.email;
        });
    }

    if (document.querySelector('.plan')) {
        const userChordNumElements = document.querySelectorAll('.plan');

        userChordNumElements.forEach(function(userChordNumElement) {
            userChordNumElement.textContent = user.plan;
        });
    }
    if (document.querySelector('.payment')) {
        const userChordNumElements = document.querySelectorAll('.payment');

        userChordNumElements.forEach(function(userChordNumElement) {
            userChordNumElement.textContent = user.payment;
        });
    }
    if(document.querySelector('.detail')) {
        const inputUsernameElement = document.querySelector('.detail'); 
        const inputUserIdElement = document.querySelector('.detail');
    
        inputUsernameElement.value = user.username;
        inputUserIdElement.value = user.email;
    }
}
export function setupUserDisplay() {
    // Call the getCurrentUser function when the page loads
    $(document).ready(function () {
        getCurrentUser()
            .then(function (user) {
                displayUser(user);
            })
            .catch(function (error) {
                console.error(error);
            });
    });
}

// Call the getCurrentUser function when the page loads
$(document).ready(function () {
    getCurrentUser()
    .then(function(user) {
        displayUser(user);
    })
    .catch(function(error) {
        console.error(error);
    });
});