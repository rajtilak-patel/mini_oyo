let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = '';
 
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log("buttons text is ",buttonText);
        if(buttonText =='X'){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C'){
            screenvalue = "=";
            screen.value = screenValue;

        }
        else if(buttonText== '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;   
        }
    })
}