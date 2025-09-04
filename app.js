const weightValue = document.getElementsByClassName("weight")[0];
const heightValue = document.getElementsByClassName("height")[0];
const btn = document.getElementsByClassName("btn")[0];
const bmiValue = document.getElementById("bmi-value");
const bmiAnalyse = document.getElementById("bmi-analyse");

// Load saved data on page load
window.addEventListener("load", () => {
  const savedWeight = localStorage.getItem("weight");
  const savedHeight = localStorage.getItem("height");
  const savedBmi = localStorage.getItem("bmi");
  const savedCategory = localStorage.getItem("category");

  if (savedWeight && savedHeight && savedBmi && savedCategory) {
    weightValue.value = savedWeight;
    heightValue.value = savedHeight;
    bmiValue.innerText = `BMI: ${savedBmi}`;
    bmiAnalyse.innerText = `Your BMI category is ${savedCategory}`;
  }
});

btn.addEventListener("click", () => {
  const weight = parseFloat(weightValue.value);
  const height = parseFloat(heightValue.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    bmiValue.innerText = "Invalid input";
    bmiAnalyse.innerText = "";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  bmiValue.innerText = `BMI: ${bmi.toFixed(1)}`;
  bmiAnalyse.innerText = `Your BMI category is ${category}`;

  // Save to localStorage
  localStorage.setItem("weight", weightValue.value);
  localStorage.setItem("height", heightValue.value);
  localStorage.setItem("bmi", bmi.toFixed(1));
  localStorage.setItem("category", category);
});
