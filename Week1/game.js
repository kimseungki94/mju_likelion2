// 초기화 시킨 변수
let funds = 50; // 배팅금액 (입력을 안할시 50으로 초기화)
let round = 0; // 라운드를 계산하기 위한 변수
let select1; // 선택한 문양1
let select2; // 선택한 문양2
let select3; // 선택한 문양3
let selectall = []; // 선택한 문양을 객체에 초기화 시키기 위해 생성
let text = ""; // 선택한 문양을 출력하기 위해 생성
let choosenum1; // 선택한 문양1 배팅 갯수
let choosenum2; // 선택한 문양2 배팅 갯수
let choosenum3; // 선택한 문양3 배팅 갯수

let face = ""; // 문양값을 초기화 시키기 위해 생성
let winnings = 0; //승리 횟수
let randomall = []; // 자신이 선택한 문양+ 갯수를 보여주기 위해 생성

//랜덤 함수 생성
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
//6개의 그림중 무작위 반환
function randFace() {
    return ["크라운", "앵커", "하트", "스페이드", "클럽", "다이아몬드"]
    [rand(0, 5)];
}

// 자신이 원하는 베팅금액 입력
function myFunction() {
    document.getElementById("bettingmoneybtn").innerHTML = "선택확인";
    let showbetting = document.getElementById("betMoney")
    showbetting.innerHTML = document.getElementById("betting").value;  //funds가 버튼클릭시 보이게끔 만듬
    funds = showbetting.innerHTML;  //funds값을 여기서 초기화 시킴
}
// 항목 선택시 p태그의 값을 선택한 문양으로 변경
function selectfunction1() {
    let choose1 = document.querySelector("#chooseyourlandmark .select1")
    let choose1val = choose1.value;
    document.getElementById("choose1").innerHTML = choose1val;
    select1 = choose1.value;
}
//선택한 문양의 값을 choosenum에 초기화
function outputfunction1() {
    document.getElementById("selectbtn1").innerHTML = "선택확인";
    let choose1num = document.getElementById("betting1").value;
    choosenum1 = choose1num;
}
// 항목 선택시 p태그의 값을 선택한 문양으로 변경
function selectfunction2() {
    let choose2 = document.querySelector("#chooseyourlandmark .select2")
    let choose2val = choose2.value;
    document.getElementById("choose2").innerHTML = choose2val;
    select2 = choose2.value;
}
//선택한 문양의 값을 choosenum에 초기화
function outputfunction2() {
    document.getElementById("selectbtn2").innerHTML = "선택확인";
    let choose2num = document.getElementById("betting2").value;
    choosenum2 = choose2num;
}
// 항목 선택시 p태그의 값을 선택한 문양으로 변경
function selectfunction3() {
    let choose3 = document.querySelector("#chooseyourlandmark .select3")
    let choose3val = choose3.value;
    document.getElementById("choose3").innerHTML = choose3val;
    select3 = choose3.value;
}
//선택한 문양의 값을 choosenum에 초기화
function outputfunction3() {
    document.getElementById("selectbtn3").innerHTML = "선택확인";
    let choose3num = document.getElementById("betting3").value;
    choosenum3 = choose3num;
}

//도박 시작 함수
function start() {
    console.log(funds)
    //금액이 2이상일때만 도박이 가능하게끔 설정
    if (funds > 1) {
        round++;

        console.log(`round ${round}:`);
        console.log(`\t starting funds: ${funds}원`);

        // 베팅한 금액을 담는 객체생성
        let bets = {
            크라운: 0,
            앵커: 0,
            하트: 0,
            스페이드: 0,
            클럽: 0,
            다이아몬드: 0
        };

        //라운드 횟수
        document.querySelector("#result .round").innerHTML = "라운드 :" + round;
        let totalBet = parseInt(choosenum1) + parseInt(choosenum2) + parseInt(choosenum3);
        document.querySelector("#result .totalBet").innerHTML = "당신의 도박 총 금액 :" + totalBet;
        console.log(`totalBet ${totalBet}:`);

        //판돈 나누기
        let remaining = funds;
        bets[select1] = bets[select1] + parseInt(choosenum1);
        bets[select2] = bets[select2] + parseInt(choosenum2);
        bets[select3] = bets[select3] + parseInt(choosenum3);
        remaining = parseInt(remaining) - parseInt(totalBet);
        console.log(`남아있는 돈 : ${remaining}`);
        document.querySelector("#result .totalremain").innerHTML = "남아있는돈 :" + `${remaining}`;
        funds = funds - totalBet;
        console.log(`얼마를 넣었을까? : ${funds}`);

        //주사위 굴리기
        let marblevalue1 = document.getElementById("mar1");
        let marblevalue2 = document.getElementById("mar2");
        let marblevalue3 = document.getElementById("mar3");
        marblevalue1.value = randFace();
        marblevalue1.innerHTML = "주사위에 나온 문양 : " + marblevalue1.value;

        marblevalue2.value = randFace();
        marblevalue2.innerHTML = " " + marblevalue2.value;

        marblevalue3.value = randFace();
        marblevalue3.innerHTML = " " + marblevalue3.value;

        //돈딴거 계산
        selectall[0] = select1;
        selectall[1] = select2;
        selectall[2] = select3;
        randomall[0] = marblevalue1.value;
        randomall[1] = marblevalue2.value;
        randomall[2] = marblevalue3.value;

        for (i = 0; i < selectall.length; i++) {
            text += selectall[i] + " ";
            console.log("콘솔이 보이냐? -> " + selectall[i])
        }
        document.getElementById("test").innerHTML = "사용자가선택한 문양 : " + text;
        text = "";

        for (die = 0; die < 3; die++) {
            face = randomall[die];
            console.log("주사위 재대로 들어갓니?" + randomall[die]);
            if (bets[face] > 0) {
                winnings = winnings + bets[face];
                console.log("위닝 재대로 들어갓니?" + winnings);
                console.log("bet 재대로 들어갓니?" + bets[face]);
            }
        }
        //document.getElementById("stop").innerHTML = bets[face];
        funds = remaining + winnings;
        document.getElementById("result1").innerHTML = "딴돈 : " + winnings;
        document.getElementById("result2").innerHTML = "현재있는돈 : " + funds;
        document.getElementById("image1").innerHTML = "선택한 문양 갯수 : 크라운 : " + bets['크라운'];
        document.getElementById("image2").innerHTML = "앵커 : " + bets['앵커'];
        document.getElementById("image3").innerHTML = "하트 : " + bets['하트'];
        document.getElementById("image4").innerHTML = "클럽 : " + bets['클럽'];
        document.getElementById("image5").innerHTML = "스페이드 : " + bets['스페이드'];
        document.getElementById("image6").innerHTML = "다이아몬드 : " + bets['다이아몬드'];
        bets['크라운'] = 0;
        bets['앵커'] = 0;
        bets['하트'] = 0;
        bets['클럽'] = 0;
        bets['스페이드'] = 0;
        bets['다이아몬드'] = 0;
        winnings = 0;

    }
}
