// function sayHello2(name){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log(name+"님 안녕하세요");
//             resolve("서울")
//         },3000)
//     }
//     )
// }

// async function sayHelloBye(name){
//     city = await sayHello2(name)
//     console.log(city+" 안녕히 가세요");
    
// }
// sayHelloBye("seung")


class Animal{
    constructor(leg){
        this.leg = leg;
    }
    printAnimal(){
        console.log(this.name+"은 다리가 " + String(this.leg)+"개");
        
    }

}

class Lion extends Animal{
    constructor(name,leg){
        super(leg)
        this.name = name
    }
    getName(){
        console.log("내 이름은 " + this.name);
        
    }
}
myLion = new Lion("King",4)
myLion.getName();
myLion.printAnimal();