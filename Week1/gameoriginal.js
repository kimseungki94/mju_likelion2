function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
console.log(`${rand(0, 5)}`);
//6개의 그림중 무작위 반환
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];
}
//console.log("베팅금액 -> " + bet);
let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
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
    let totalBet = rand(1, funds);
    console.log(`totalBet ${totalBet}:`);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //판돈 나누기
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
            console.log(`남아있는 돈 : ${remaining}`);
        } while (remaining > 0)
    }
    funds = funds - totalBet;
    console.log(`얼마를 넣었을까? : ${funds}`);
    console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} 원`).join(', ') + `(total: ${totalBet} 원)`);

    //주사위 굴리기
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    let winnings = 0;

    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinngings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

function betting(){

}