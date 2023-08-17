function getInputFildValueById(inputId){
    const inputFild = document.getElementById(inputId);
    const InputFildValueString = inputFild.value;
    const InputFildValue = parseFloat(InputFildValueString);
    inputFild.value = '';  
    return InputFildValue;
}
function gettextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValuestring = textElement.innerText;
    const textElementValue = parseFloat(textElementValuestring);
    return textElementValue; 
} 

function setElementTextValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
     textElement.innerText = newValue;
}