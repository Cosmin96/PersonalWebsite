var date = new Date();
var month = date.getMonth();

if(month === 11 || month === 0 || month === 1) {
    document.getElementById("profilebg").style.backgroundImage = "url('images/winter.jpg')";
}
if(month === 2 || month === 3 || month === 4) {
    document.getElementById("profilebg").style.backgroundImage = "url('images/spring.jpg')";
}
if(month === 5 || month === 6 || month === 7) {
    document.getElementById("profilebg").style.backgroundImage = "url('images/summer.jpg')";
}
if(month === 8 || month === 9 || month === 10) {
    document.getElementById("profilebg").style.backgroundImage = "url('images/autumn.jpg')";
}