const bntE1 = document.getElementById("btn");
const bmiInputE1 = document.getElementById("bmi-result");
const weightConditionE1 = document.getElementById("weight-condition");

function calculateBMI(){
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue/ (heightValue* heightValue);

    bmiInputE1.value = bmiValue;

   if(bmiValue < 18.5) {
    weightConditionE1.innerText ="Under weight";
   } else if(bmiValue >= 18.5 && bmiValue <= 24.9)
   {
    weightConditionE1.innerText = "Normal weight";
   } else if(bmiValue >=25 && bmiValue<= 29.9) {
    weightConditionE1.innerText ="Overweight";
   } else if(bmiValue <=30) {
    weightConditionE1.innerText ="Obesity";
   }

}


bntE1.addEventListener("click", calculateBMI);