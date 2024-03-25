let NodeTheme = document.querySelector(".buttons__themeLogo");
let Nodecontainer__result = document.querySelector(".container__result");
let Nodecolculatar__button = document.querySelector(".colculatar__button");
let NodebuttonsCharacter =  document.getElementsByClassName("buttons__NoneBack");
let NodebuttonsCharacter2 =  document.querySelector(".buttons__NoneBack");
let Nodebuttons__themeLogo = document.querySelector(".buttons__themeLogo");
let Nodebuttons__ArifMath = document.getElementsByClassName('buttons__ArifMath');
let NodeAll__result = document.querySelector(".all__result");
let NodeText__result = document.querySelector(".text__result");
let color = 'white';

let Nodebuttons__click = document.querySelector("#buttons__click--AC");
let character0 = document.querySelector("#charcter--0");
let character1 = document.querySelector("#charcter--1");
let character2 = document.querySelector("#charcter--2");
let character3 = document.querySelector("#charcter--3");
let character4 = document.querySelector("#charcter--4");
let character5 = document.querySelector("#charcter--5");
let character6 = document.querySelector("#charcter--6");
let character7 = document.querySelector("#charcter--7");
let character8 = document.querySelector("#charcter--8");
let character9 = document.querySelector("#charcter--9");
let character__pointer = document.querySelector("#charcter--point");
character__pointer= ".";

let characterPersent = document.querySelector("#character--Pers");
let characterShare = document.querySelector("#character--÷");
let characterMultiply = document.querySelector("#character--×");
let characterMinus = document.querySelector("#character---");
let characterPlus = document.querySelector("#charcter-Plus");
let characterEvenly = document.querySelector("#charcter--Evenly");

let point = 0;
NodeTheme.addEventListener("click" , function (){
    if(point == 0){
        NodeTheme.innerHTML = `<img src="./image/Group%2058.png" alt="">`
        point+=1;
        console.log(point);

        Nodecolculatar__button.classList.add("colculatar__button--theme");

        Nodebuttons__themeLogo.style.background = '#3E3E3E';
        Nodecolculatar__button.style.borderTopLeftRadius = '0';
        Nodecolculatar__button.style.borderTopRightRadius = '0';
        Nodecontainer__result.style.background = '#212327';

        NodeAll__result.style.color = 'white'
        NodeText__result.style.color = 'white'

        for(let i = 0; i < Nodebuttons__ArifMath.length; i++ ){
            Nodebuttons__ArifMath[i].style.background = '#3E3E3E';
            Nodebuttons__ArifMath[i].style.color = '#FFFFFF';
        }

        for(let i = 0; i < NodebuttonsCharacter.length; i++ ){
            NodebuttonsCharacter[i].style.color = '#FFFFFF';
        }
    }

    else if(point == 1){
        NodeTheme.innerHTML = `<img src="./image/Vector.svg" alt="">`
        point = 0;

        Nodecolculatar__button.classList.remove("colculatar__button--theme");
        // buttonsCharacter.style.color = '#1E1E1E';

        Nodebuttons__themeLogo.style.background = '#E9E9E9';

        for(let i = 0; i < Nodebuttons__ArifMath.length; i++ ){
            Nodebuttons__ArifMath[i].style.background = '#E9E9E9';
            Nodebuttons__ArifMath[i].style.color = '#1E1E1E';
        }

        for(let i = 0; i < NodebuttonsCharacter.length; i++ ){
            NodebuttonsCharacter[i].style.color = '#1E1E1E';
        }
    }
})

var results = "";
let counter = 0;

console.log(results + 10);

character0.addEventListener("click", function (){

    if( counter == 0){
        results = "";
    }

    else if (counter = 1){
        results = results + "0";
    }

    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})


character1.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "1";

        counter=1;
    }



    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})


character2.addEventListener("click", function (){

    if( counter >= 0){
        results =  results + "2";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character3.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "3";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character4.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "4";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character5.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "5";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character6.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "6";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character7.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "7";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character8.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "8";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

character9.addEventListener("click", function (){
    if( counter >= 0){
        results =  results + "9";

        counter=1;
    }
    NodeText__result.innerHTML = results;
    NodeAll__result.innerHTML = results;
})

// character__pointer.addEventListener("click", function (){
//     NodeText__result.innerHTML = 23;
//     // NodeAll__result.innerHTML = ".";
// })

Nodebuttons__click.addEventListener("click", function (){
    NodeAll__result.innerHTML = "";
    NodeText__result.innerHTML = "";
    results = "";
    counter = 0;
})

characterPlus.addEventListener("click" , ()=> {
    NodeAll__result.innerHTML = results;
    let counterPlus = 0;
    let resultA = "";
    let resultB = "";
    if(counterPlus == 0) {
        results = results + '+';
        counterPlus = 1;
    }
})


