const { calculateBMI, categorizeBMI } = require("../src/healthutils");

// BMI Calculation Tests
test("BMI calculation works correctly", () => {
  expect(calculateBMI(65, 170)).toBeCloseTo(22.5, 1); // Normal
  expect(calculateBMI(45, 160)).toBeCloseTo(17.6, 1); // Underweight
  expect(calculateBMI(90, 175)).toBeCloseTo(29.4, 1); // Overweight
  expect(calculateBMI(110, 165)).toBeCloseTo(40.4, 1); // Obese
});

test("BMI calculation handles edge cases", () => {
  expect(() => calculateBMI(-65, 170)).toThrow("Invalid weight");
  expect(() => calculateBMI(65, -170)).toThrow("Invalid height");
  expect(() => calculateBMI(0, 170)).toThrow("Invalid weight");
  expect(() => calculateBMI(65, 0)).toThrow("Invalid height");
});

test("BMI calculation with decimal values", () => {
  expect(calculateBMI(65.5, 170.5)).toBeCloseTo(22.5, 1);
  expect(calculateBMI(45.7, 159.8)).toBeCloseTo(17.9, 1);
});

// BMI Categorization Tests
test("BMI categorization works correctly", () => {
  expect(categorizeBMI(17.6)).toBe("Underweight");
  expect(categorizeBMI(22.5)).toBe("Normal weight");
  expect(categorizeBMI(27.0)).toBe("Overweight");
  expect(categorizeBMI(32.0)).toBe("Obese");
});

test("BMI categorization boundary values", () => {
  expect(categorizeBMI(18.4)).toBe("Underweight");
  expect(categorizeBMI(18.5)).toBe("Normal weight");
  expect(categorizeBMI(24.9)).toBe("Normal weight");
  expect(categorizeBMI(25.0)).toBe("Overweight");
  expect(categorizeBMI(29.9)).toBe("Overweight");
  expect(categorizeBMI(30.0)).toBe("Obese");
});

test("BMI categorization extreme values", () => {
  expect(categorizeBMI(10.0)).toBe("Severely Underweight");
  expect(categorizeBMI(45.0)).toBe("Morbidly Obese");
});

test("BMI categorization invalid inputs", () => {
  expect(() => categorizeBMI(-5)).toThrow("Invalid BMI value");
  expect(() => categorizeBMI(0)).toThrow("Invalid BMI value");
  expect(() => categorizeBMI(100)).toThrow("Invalid BMI value");
});

// Format Validation Tests
test("Input type validation", () => {
  expect(() => calculateBMI("65", 170)).toThrow("Invalid input type");
  expect(() => calculateBMI(65, "170")).toThrow("Invalid input type");
  expect(() => calculateBMI(null, 170)).toThrow("Invalid input type");
  expect(() => calculateBMI(65, undefined)).toThrow("Invalid input type");
});
