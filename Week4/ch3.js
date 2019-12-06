// setTimeout(()=>{console.log("안녕하세요")},2000)
// console.log("안녕히가세요");

//비동기 단점을 만회화기 위해
//callback함

// function doSometing(callback){
//     console.log('fdsfds');
//     setTimeout(function(){callback();},500);
// }

// function sayHello(sayGoodbye){
//     setTimeout(()=>{
//         console.log("안녕1");
//         sayGoodbye();
//     },2000);
// }

// sayHello(()=>console.log("안녕2"));

// function sayHello2(name){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log(name+"님 안녕하세요");
//             resolve("서울")
//         },3000)
//     }
//     )
// }

// sayHello2("Frank")
//     .then((city)=> console.log(city+"안녕히 가세요"));

    //catch도 쓸수잇다

// async function sayHelloBye(name){
//     city = await sayHello2(name)
//     console.log(city+"안녕히 가세요");
    
// }
// sayHelloBye("seung")