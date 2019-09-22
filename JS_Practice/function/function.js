function al() {
    alert("al함수호출");
}
function f(x) {
    console.log(`f 내부 : x=${x}`);
    x = 5;
    console.log(`f 내부: x=${x} (할당 후)`);
}
let x = 3;
console.log(`f를 호출하기 전: x=${x}`);
f(x);
console.log(`f를 호출한 다음: x=${x}`);

function f(o) {
    o.message = `f 안에서 수정(이전값 : '${o.message}'')`
}
let o = {
    message: "초기값"
};
console.log(`f를 호출하기 전: o.message="${o.message}"`);

f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);

// function getSetence([subject,verb,object]){
//     return `${subject} ${verb} ${object}`;
// }

// const setence = {
//     subject: "I",
//     verb: "love",
//     object: "JavaScript",
// };
// getSetence(setence);
// console.log(`getSetence 함수 리턴 값 : "${getSetence(setence)}"`);

const l = {
    name: 'Julie',
    greetBackwards: function () {
        function getReverseName() {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym,olleH`;
    },
};

console.log(`greetBackwards의 리턴값 : "${l.greetBackwards()}"`)

const z = {
    name: 'Julie',
    greetBackwards: function () {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym,olleH`;
    },
};

console.log(`greetBackwards의 리턴값 : "${z.greetBackwards()}"`);

// const g = function f(stop){
//     if(stop) console.log('f stopped');
//     f(true);
// };
// g(false);

//arrow function 사용법

const f1 = function() { return "hello"; }
// 또는
console.log(`f1의 리턴값 : "${f1()}"`)
const f2 = () => "hello";
console.log(`f2의 리턴값 : "${f2()}"`)

const name="seung";

const f3 = function(name) { return `Hello, ${name}!`;}
console.log(`f3의 리턴값 : "${f3(name)}"`)
// 또는
const f4 = name => `Hello, ${name}!`;
console.log(`f4의 리턴값 : "${f4(name)}"`)

const f5 = function(a,b) {return a+b; }
console.log(`f5의 리턴값 : "${f5(10,20)}"`)

const f6 = (a,b)=>a+b;
console.log(`f6의 리턴값 : "${f6(10,20)}"`)

let g = {
    name: 'Julie',
    greetBackwards: function(){
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i = this.name.length-1;i>=0;i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym,olleH`;
    },
};
console.log(`새로운 arrowfunction g의 리턴값 : "${g.greetBackwards()}" `)


// 내장 함수

function sample1(){
    function sample2(){
        
    }
}

//use call function

const bruce = { name : "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet(){
    return `Hello, I'm ${this.name}`;
}
// 함수 호출
console.log(`greet함수 실행 1 : "${greet()}"`);
console.log(`greet함수 실행 2 : "${greet.call(bruce)}"`);
console.log(`greet함수 실행 3 : "${greet.call(madeline)}"`);

// apply (매개변수를 직접받는 call과 달리 배열로 받음)

PaymentRequestUpdateEvent.apply(bruce,[1955,"actor"]);