
const display= document.getElementById("display");

function appendToDisplay(input)
{
    display.value+=input;
}

function clearDisplay()
{
    display.value="";
}

function calculate()
{
    let displayValue=display.value;

    displayValue=displayValue.replace(/x/g, '*');
    displayValue=displayValue.replace(/:/g, '/');

    try{
    display.value=eval(displayValue);
    }
    catch(error){
        clearDisplay();
    }
}