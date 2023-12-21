function gid(id) {
    return document.getElementById(id);
}
//================================================
$(document).ready(function(){      
    let Target = gid("seatS");
    function SeatSituation() {
        let allCount = document.getElementsByClassName("seat").length;  //  전체 좌석 수
        let boCount = document.querySelectorAll("#booked").length;     //  예약된 좌석 수
        let count = allCount - boCount;                                //  전체 - 예약석 = 남은 좌석 수

        Target.innerHTML = `현재 좌석 : <br><br>` 
        Target.innerText += `${count}/${allCount}`;
        }
        SeatSituation();
        setInterval(SeatSituation, 1000);


    $("#pay").click(function() {        //  결제하기 버튼   
        let selCount = document.querySelectorAll("#selected").length;   //선택된 좌석 수
        if(selCount>=1) {
            if(selCount>=2) {
                alert("한 사람 당 한 좌석만 이용 가능합니다.") }
            else 
                if(confirm(`선택하신 좌석의 결제를 진행하시겠습니까?`)) {
                    let times = gid("box").innerText;

                    function payment() {
                        if(a > b || a > c) {
                            times = times * 3000; }
                            else if(b > a || b > c) {
                                tiems = times * 2000;}
                                else
                                    times = times * 1500;    }
                payment();

                gid("selected").id = 'booked';
                window.open("result.html","영수증","width=950, height=700");
                }
                else 
                gid("selected").id= '';         }
                    else 
                    alert(`좌석을 선택해주세요!`) }
    )

    $("#fee").click(function() {        //  이용 요금 버튼
        window.open("Feelist.html","이용 요금","width=950, height=700");
})

    $(".seat").click(function() {       //  좌석 선택

        if(this.id=='selected') 
            this.id = '';
        else if(this.id=='booked')
            alert("이미 예약된 좌석입니다.");
        else
            this.id = 'selected'
    })

        $('.btn').mouseover(function() {
           this.id ="move";
   })
        $('.btn').mouseout(function() {
           this.id = '';
   })

        $('.btn1').mouseover(function() {
            this.id ="move1";
})
        $('.btn1').mouseout(function() {
            this.id = '';
})

   $("#up").click(function() {
    gid("box").innerText++;
})

$("#down").click(function() {
    if(gid("box").innerText > 0)
    gid("box").innerText--;
})

$('#pre').click(function() {
    document.location.href="studycafe_main.html ";
})

$("#print").click(function() { 
    window.print(document.getElementsByClassName("result"));
})

})
//=================================================