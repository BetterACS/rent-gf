// displayData.js

const data = {
    username: 'John Doe',
    friendtal: 'Friendtal Name',
    date: '2023-01-01',
    email: 'john@example.com',
    plan: 'Standard Plan',
    payment: 'Credit Card',
    price: '$50.00',
    detail: 'Additional details',
};

// JavaScript to display fetched data
document.getElementById('user_name').innerText = 'User Name: ' + data.username;
document.getElementById('friendtal').innerText = 'Friendtal: ' + data.friendtal;
document.getElementById('date').innerText = 'Date: ' + data.date;
document.getElementById('your_email').innerText = 'Your Email: ' + data.email;
document.getElementById('plan').innerText = 'Plan: ' + data.plan;
document.getElementById('payment').innerText = 'Payment: ' + data.payment;
document.getElementById('price').innerText = 'Price: ' + data.price;
document.getElementById('detail').innerText = 'Detail: ' + data.detail;
