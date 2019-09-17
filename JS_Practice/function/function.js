function al(){
    alert("al함수호출");
}
function f(x){
    console.log(`f 내부 : x=${x}`);
    x=5;
    console.log(`f 내부: x=${x} (할당 후)`);
}
let x=3;
console.log(`f를 호출하기 전: x=${x}`);
f(x);
console.log(`f를 호출한 다음: x=${x}`);

function f(o){
    o.message = `f 안에서 수정(이전값 : '${o.message}'')`
}
let o = {
    message: "초기값"
};
console.log(`f를 호출하기 전: o.message="${o.message}"`);

f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);

function getSetence([subject,verb,object]){
    return `${subject} ${verb} ${object}`;
}