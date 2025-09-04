const weight = document.getElementsByClassName("weight")[0];
console.log(weight.value);
const height = document.getElementsByClassName("height")[0];
const result = document.getElementById('result');
const btn = document.getElementsByClassName("btn")[0];
const bmiValue = document.getElementById("bmi-value");
const bmiAnalyse = document.getElementById("bmi-analyse");

btn.addEventListener("click" , () =>{
//  if (isNaN(weight) || isNaN(height) || weight.value <= 0 || height.value <= 0) {
//     bmiValue.innerText = "Invalid input";
//     bmiAnalyse.innerText = "";
//     return;
//   }
    
// console.log(weight.value);
// console.log(height.value);
let bmi = parseFloat(weight.value) / ((parseFloat(height.value) / 100) ** 2);


let category=""; 

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
}

bmiValue.innerText=`${bmi}`;
bmiAnalyse.innerText=`${category}`;
});










