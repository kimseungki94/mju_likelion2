window.onload = function() { 
    let person = {
        name: 'Bob',
        age: 32,
        gender: 'male',
        interests: 'music',
    };

    let account = document.getElementsByTagName("p");

    account.name = person.name;
    account.age = person.age;
    account.gender = person.gender;
    account.interests = person.interests;

    let counter2 = document.getElementById('showbtn'); 
    counter2.onclick = function()
     { 
         document.getElementById("name").innerHTML = `${account.name}`; 
         document.getElementById("age").innerHTML = `${account.age}`;
         document.getElementById("gender").innerHTML = `${account.gender}`;
         document.getElementById("interests").innerHTML = `${account.interests}`;
    };

}

