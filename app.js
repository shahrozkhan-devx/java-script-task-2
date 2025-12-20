
// 1. Age Group
    function ageGroup() {
      let age = Number(prompt("Enter your age:"));
      if (isNaN(age) || age < 0) {
        alert("Invalid Input");
      } else if (age <= 12) {
        alert("Child");
      } else if (age <= 19) {
        alert("Teenager");
      } else if (age <= 59) {
        alert("Adult");
      } else {
        alert("Senior Citizen");
      }
    }

    // 2. Even or Odd
    function evenOdd() {
      let num = Number(prompt("Enter a number:"));
      if (isNaN(num)) {
        alert("Invalid Input");
      } else if (num % 2 === 0) {
        alert("Even Number");
      } else {
        alert("Odd Number");
      }
    }

    // 3. Positive, Negative or Zero
    function posNegZero() {
      let num = Number(prompt("Enter a number:"));
      if (num > 0) {
        alert("Positive Number");
      } else if (num < 0) {
        alert("Negative Number");
      } else {
        alert("Zero");
      }
    }

    // 4. Vowel or Consonant
    function vowelCheck() {
      let ch = prompt("Enter a letter:");
      if (!ch || ch.length !== 1 || !isNaN(ch)) {
        alert("Invalid Input");
      } else if ("aeiouAEIOU".includes(ch)) {
        alert("Vowel");
      } else {
        alert("Consonant");
      }
    }

    // 5. Simple Calculator
    function calculator() {
      let num1 = Number(prompt("Enter first number:"));
      let num2 = Number(prompt("Enter second number:"));
      let op = prompt("Enter operator (+, -, *, /):");

      if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid Input");
      } else if (op === "+") {
        alert(num1 + num2);
      } else if (op === "-") {
        alert(num1 - num2);
      } else if (op === "*") {
        alert(num1 * num2);
      } else if (op === "/") {
        if (num2 === 0) {
          alert("Error: Division by zero");
        } else {
          alert(num1 / num2);
        }
      } else {
        alert("Invalid Operator");
      }
    }

    // 6. Leap Year
    function leapYear() {
      let year = Number(prompt("Enter a year:"));
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert("Leap Year");
      } else {
        alert("Not a Leap Year");
      }
    }

    // 7. Temperature Checker
    function temperature() {
      let temp = Number(prompt("Enter temperature in °C:"));
      if (temp >= 30) {
        alert("It's Hot");
      } else if (temp >= 20) {
        alert("It's Warm");
      } else if (temp >= 10) {
        alert("It's Cool");
      } else {
        alert("It's Cold");
      }
    }

    // 8. Grade Calculator
    function grade() {
      let marks = Number(prompt("Enter marks (0-100):"));
      if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid Input");
      } else if (marks >= 90) {
        alert("A Grade");
      } else if (marks >= 80) {
        alert("B Grade");
      } else if (marks >= 70) {
        alert("C Grade");
      } else if (marks >= 60) {
        alert("D Grade");
      } else if (marks >= 50) {
        alert("E Grade");
      } else {
        alert("Fail");
      }
    }

    // 9. Largest of Three Numbers
    function largest() {
      let a = Number(prompt("Enter first number:"));
      let b = Number(prompt("Enter second number:"));
      let c = Number(prompt("Enter third number:"));

      if (a === b && b === c) {
        alert("All numbers are equal");
      } else if (a > b && a > c) {
        alert("Largest number is " + a);
      } else if (b > a && b > c) {
        alert("Largest number is " + b);
      } else {
        alert("Largest number is " + c);
      }
    }

    // 10. Login System
    function login() {
      let user = prompt("Enter username:");
      let pass = prompt("Enter password:");

      if (!user || !pass) {
        alert("Please enter all details");
      } else if (user === "admin" && pass === "12345") {
        alert("Login Successful");
      } else {
        alert("Incorrect Credentials");
      }
    }
