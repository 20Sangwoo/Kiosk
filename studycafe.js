function gid(id) {
    return document.getElementById(id);
}


//================================================
$(document).ready(function(){           
    let allCount = document.getElementsByClassName("seat").length;  //  전체 좌석 수
    let boCount = document.querySelectorAll("#booked").length;     //  예약된 좌석 수
    let selCount = document.querySelectorAll("#selected").length;   //  선택된 좌석 수
    let count = allCount - boCount;                                //  전체 - 예약석 = 남은 좌석 수

    $("#pay").click(function() {        //  결제하기 버튼
        if(selCount>=1) 
            confirm(`선택하신 좌석의 결제를 진행하시겠습니까?`);
        else
            alert(`좌석을 선택해주세요!`)

    })

    $("#fee").click(function() {        //  이용 요금 버튼
        $("#feelist").toggle(1000);
})



    $("#situation").click(function(){               //  좌석 현황 버튼
        alert(`현재 ${count}개의 좌석이 있습니다`);
})
})

$(document).ready(function(){           //  좌석 선택
    $(".seat").click(function() {
        if(this.id=='selected') 
            this.id = '';
        else if(this.id=='booked')
            alert("이미 예약된 좌석입니다.");
        else
            this.id = 'selected'
    })
})
//=================================================
window.onload = function() {
    $("#feelist").hide();

    
    
}
