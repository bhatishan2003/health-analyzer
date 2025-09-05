function calculateBMI(weight, height) {
  // Input type validation
  if (typeof weight !== "number" || typeof height !== "number") {
    throw new Error("Invalid input type");
  }

  // Input value validation
  if (weight <= 0) throw new Error("Invalid weight");
  if (height <= 0) throw new Error("Invalid height");

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI: weight(kg) / height(m)²
  return weight / (heightInMeters * heightInMeters);
}

function categorizeBMI(bmi) {
  // Input validation
  if (bmi <= 0 || bmi > 50) throw new Error("Invalid BMI value");

  if (bmi < 16) return "Severely Underweight";
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  if (bmi < 40) return "Obese";
  return "Morbidly Obese";
}

module.exports = {
  calculateBMI,
  categorizeBMI,
};
