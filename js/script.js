//Created by: Parth Vasdewani
//Date : 23-07-2023
//GitHub : imparthv

let clockHour = document.getElementById("hourHand");
let clockMinute = document.getElementById("minuteHand");
let clockSecond = document.getElementById("secondHand");

function displayTime() {
    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let minutesNow = timeNow.getMinutes();
    let secondsNow = timeNow.getSeconds();

    let hourRotation = 30 * hoursNow + minutesNow / 2;
    let minuteRotation = 6 * minutesNow;
    let secondRotation = 6 * secondsNow;

    clockHour.style.transform = `rotate(${hourRotation}deg)`;
    clockMinute.style.transform = `rotate(${minuteRotation}deg)`;
    clockSecond.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(displayTime, 1000);