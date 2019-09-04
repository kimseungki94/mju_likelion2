function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
console.log(`${rand(0, 5)}`);
//6개의 그림중 무작위 반환
function randFace() {
    return ["크라운", "앵커", "하트", "스페이드", "클럽", "다이아몬드"]
    [rand(0, 5)];
}
//console.log("베팅금액 -> " + bet);
let funds = 50;
let round = 0;
let choosenum1;
let choosenum2;
let choosenum3;
let select1;
let select2;
let select3;
//자신이 원하는 베팅금액 입력
function myFunction() {
    document.getElementById("bettingmoneybtn").innerHTML = "선택확인";
    let showbetting = document.getElementById("betMoney")
    showbetting.innerHTML = document.getElementById("betting").value;
    funds = showbetting.innerHTML;

}
function selectfunction1() {
    let choose1 = document.querySelector("#chooseyourlandmark .select1")
    let choose1val = choose1.value;
    document.getElementById("choose1").innerHTML = choose1val;
    select1 = choose1val
}
function outputfunction1() {
    document.getElementById("selectbtn1").innerHTML = "선택확인";
    let choose1num = document.getElementById("betting1").value;
    choosenum1 = choose1num;
}
function selectfunction2() {
    let choose2 = document.querySelector("#chooseyourlandmark .select2")
    let choose2val = choose2.value;
    document.getElementById("choose2").innerHTML = choose2val;
    select2 = choose2val
}
function outputfunction2() {
    document.getElementById("selectbtn2").innerHTML = "선택확인";
    let choose2num = document.getElementById("betting2").value;
    choosenum2 = choose2num;
}
function selectfunction3() {
    let choose3 = document.querySelector("#chooseyourlandmark .select3")
    let choose3val = choose3.value;
    document.getElementById("choose3").innerHTML = choose3val;
    select3 = choose3val
}
function outputfunction3() {
    document.getElementById("selectbtn3").innerHTML = "선택확인";
    let choose3num = document.getElementById("betting3").value;
    choosenum3 = choose3num;
}
function sample() {
    document.getElementById("sample").innerHTML = `되라 -> ${funds}`;
}

function showround() {
    document.getElementById("round").innerHTML = `${round}`;
}

function start() {
    if (funds > 1 && funds < 100) {
        round++;

        console.log(`round ${round}:`);
        console.log(`\t starting funds: ${funds}원`);
        let bets = {
            crown: 0,
            anchor: 0,
            heart: 0,
            spade: 0,
            club: 0,
            diamond: 0
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
        marblevalue2.innerHTML = marblevalue2.value;

        marblevalue3.value = randFace();
        marblevalue3.innerHTML = marblevalue3.value;

        let winnings = 0; //승리 횟수
        let earn = 0; //수익금
        //돈딴거 계산     
        if (String(select1) === String(marblevalue1.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum1);
        } 
        else if (String(select1) === String(marblevalue2.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~";
            comparebet123.innerHTML = "";
            winnings = winnings +1;
            earn = earn + parseInt(choosenum1);
        } 
        else if (String(select1) === String(marblevalue3.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum1);
        } 
        if (String(select2) === String(marblevalue1.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum2);
        }
        else if (String(select2) === String(marblevalue2.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum2);
        }
        else if (String(select2) === String(marblevalue3.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum2);
        }
        if (String(select3) === String(marblevalue1.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum3);
        }
        else if (String(select3) === String(marblevalue2.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum3);
        }
        else if (String(select3) === String(marblevalue3.value)) {
            let comparebet = document.getElementById("comparebet");
            let comparebet123 = document.getElementById("comparebet123");
            comparebet.innerHTML = "응땃어~"
            comparebet123.innerHTML = ""
            winnings = winnings +1;
            earn = earn + parseInt(choosenum3);
        }
        if(winnings == 0){
            comparebet.innerHTML = "인생...."
            comparebet123.innerHTML = ""
        } 
        let wingame = document.getElementById("winningnum");
        wingame.innerHTML = "이긴횟수 : " +winnings;

        document.getElementById("earning").innerHTML = "수익금 : " +earn;



        for (let die = 0; die < hand.length; die++) {
            let face = hand[die];
            if (bets[face] > 0) winnings = winnings + bets[face];
        }
        funds = funds + winnings;
        console.log(`\twinngings: ${winnings}`);
    }
}