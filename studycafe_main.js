$(document).ready(function() {
    $('#logo').click(function() {
    document.location.href="file:///C:/Users/whtkd/OneDrive/%EB%AC%B8%EC%84%9C/Kiosk/title.html";
})
    $('.Area').mouseover(function() {
       this.id ="Sel";
})
   $('.Area').mouseout(function() {
       this.id = '';
})

    $("#A").click(function() {
    document.location.href="file:///C:/Users/whtkd/OneDrive/%EB%AC%B8%EC%84%9C/Kiosk/studycafe_Aseat.html";
})
    $("#B").click(function() {
    document.location.href="file:///C:/Users/whtkd/OneDrive/%EB%AC%B8%EC%84%9C/Kiosk/studycafe_Bseat.html";
})
    $("#C").click(function() {
    document.location.href="file:///C:/Users/whtkd/OneDrive/%EB%AC%B8%EC%84%9C/Kiosk/studycafe_Cseat.html";
})
})