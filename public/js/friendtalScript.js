import { setupFriendtalDisplay } from './friendtalScript.js';

function fetchFriendtalData() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: '/friendtal', // กำหนด URL ของ API Endpoint ที่คุณสร้างขึ้น
            method: 'GET',
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject('Error fetching Friendtal data:', error);
            }
        });
    });
}

function displayFriendtal(friendtalData) {
    // แสดงข้อมูล Friendtal ใน HTML ตามที่คุณต้องการ
    // ...

    // เรียก setupFriendtalDisplay() เพื่อตั้งค่าการแสดงผล Friendtal
    setupFriendtalDisplay();
}

// เรียกฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
$(document).ready(function () {
    fetchFriendtalData()
        .then(function (friendtalData) {
            displayFriendtal(friendtalData);
        })
        .catch(function (error) {
            console.error(error);
        });
});