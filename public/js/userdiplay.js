import User from './userclass.js';

export function getCurrentUser() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: '/user/info',
            method: 'GET',
            success: function (data) {
                const i = data[0];
                const user = new User(i.user_id, i.username, i.email, i.tel, i.gender, i.age);
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

    if (document.querySelector('.email')) {
        const userEmailElements = document.querySelectorAll('.email');

        userEmailElements.forEach(function(userEmailElement) {
            userEmailElement.textContent = user.email;
        });
    }

    if (document.querySelector('.age')) {
        const userPostNumElements = document.querySelectorAll('.age');

        userPostNumElements.forEach(function(userPostNumElement) {
            userPostNumElement.textContent = user.age;
        });
    }

    if (document.querySelector('.gen')) {
        const userChordNumElements = document.querySelectorAll('.gen');

        userChordNumElements.forEach(function(userChordNumElement) {
            userChordNumElement.textContent = user.gender;
        });
    }

    if (document.querySelector('.tel')) {
        const userChordNumElements = document.querySelectorAll('.tel');

        userChordNumElements.forEach(function(userChordNumElement) {
            userChordNumElement.textContent = user.tel;
        });
    }

    if(document.querySelector('.user-input')) {
        const inputUsernameElement = document.querySelector('.username'); 
        const inputUserIdElement = document.querySelector('.email');
    
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