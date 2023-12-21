$(document).ready(function() {
    $('#logo').click(function() {
    document.location.href="title.html";
})
    $('.Area').mouseover(function() {
       this.id ="Sel";
})
   $('.Area').mouseout(function() {
       this.id = '';
})

    $("#A").click(function() {
    document.location.href="studycafe_Aseat.html";
})
    $("#B").click(function() {
    document.location.href="studycafe_Bseat.html";
})
    $("#C").click(function() {
    document.location.href="studycafe_Cseat.html";
})
})