function digitalclock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();
    let session = "AM";
    if (hour >= 12) {
        hour = hour-12;
        session = "PM";
    }
    if (hour === 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "0"+hour;
    }
    if (minute < 10) {
        minute = "0"+minute;
    }
    if (seconds < 10) {
        seconds = "0"+seconds;
    }
    if (day < 10) {
        day = "0"+day;
    }
    if (month < 10) {
        month = "0"+month;
    }

    var time = hour+ ":"+minute + ":" +seconds +" "+session;
    var datetime = day+ "/"+month+ "/"+year;

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = datetime;
}

setInterval(digitalclock, 1000);
