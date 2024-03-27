let NodeDisplay = document.querySelector('.display');
let NodeButtons = Array.from(document.querySelectorAll('.button'));

NodeButtons.map((button) =>{
    button.addEventListener("click",(event)=>{
        switch (event.target.innerText){

            case 'AC':
                NodeDisplay.innerText = '0';
                break;

            case "=":
                NodeDisplay.innerText = eval(NodeDisplay.innerText)
                break;

            case "%":
                let passedText = NodeDisplay.innerText + "/100";
                NodeDisplay.innerText = eval(passedText);
                break;

            case "+/-":
                NodeDisplay.innerText =  "-";
                break;
            default:
                if(NodeDisplay.innerText === "0" && event.target.innerText !== ".") {
                    NodeDisplay.innerText = event.target.innerText;
                }
                else {
                    NodeDisplay.innerText += event.target.innerText;
                }
        }

        console.log(typeof NodeDisplay.innerText)
    });
});


