const display=document.getElementById("display")
function appendtodisplay(input){
    display.value += input;
}
function calculateResult(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error";
    }  
}
function clearDisplay() {
    display.value=" "
}