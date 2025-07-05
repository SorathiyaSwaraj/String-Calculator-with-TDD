# String-Calculator-with-TDD#

This project implements a **String Calculator** using **JavaScript** and the **Test-Driven Development (TDD)** approach. It demonstrates how to evolve a function step-by-step by writing failing tests first, then implementing the minimum code to pass the tests.

---

## ✅ Features Implemented

| Task | Feature Description |
|------|---------------------|
| 1    | Returns `0` for an empty string |
| 2    | Returns number for a single input |
| 3    | Adds comma-separated numbers |
| 4    | Handles unknown number of comma-separated values |
| 5    | Handles newline (`\n`) as a delimiter |
| 6    | Supports custom single-character delimiter (e.g. `//;\n1;2`) |
| 7    | Throws an exception for negative numbers with message: `"negatives not allowed: -X"` |
| 8    | Tracks number of times `add()` is called |
| 9    | Ignores numbers greater than 1000 |
| 10   | Supports custom delimiters of any length (`//[***]\n1***2***3`) |
| 11   | Supports multiple single-character custom delimiters (`//[*][%]\n1*2%3`) |
| 12   | Supports multiple multi-character custom delimiters (`//[***][%%%]\n1*2%3`) |

---

## 🧪 Tech Stack

- **Language**: JavaScript
- **Testing**: [Jest](https://jestjs.io/)
- **Approach**: TDD (Test-Driven Development)

---

---

## 🚀 How to Run

### 1. Install Dependencies

npm install -y

### 2. Install Jest framework

npm install --save-dev jest

### 3. run tests
npm run test


##  Test Outputs

![test-outputs](./screen-shots/Screenshot%202025-07-05%20173323.png)
