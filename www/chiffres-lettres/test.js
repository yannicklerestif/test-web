var TARGET = 1990;
var OPERATIONS = ['+','-','*','/'];
var ALL_NUMBERS = [4, 7, 14, 25, 30];
var solutionsCount = 0;
var best = 999999;

function createSolution(result, steps) {
  if(Math.abs(result - TARGET) < Math.abs(best - TARGET)) {
    console.log(result + ' <= ' + steps);
    best = result;
  }
  solutionsCount++;
}

function addStep(numbers, steps, firstIndex, secondIndex, operationIndex) {
//   if(solutionsCount > 50)
//     return;
  numbers = numbers.slice();
  steps = steps.slice();
  var firstNumber = numbers[firstIndex];
  var secondNumber = numbers[secondIndex];
  var operation = OPERATIONS[operationIndex];
  if(operationIndex == 3 && (firstNumber % secondNumber != 0))
    return;
  if(operationIndex == 1 && (firstNumber - secondNumber == 0 || firstNumber - secondNumber < 0))
    return;
  var result;
  if(operationIndex == 0)
    result = firstNumber + secondNumber;
  else if(operationIndex == 1)
    result = firstNumber - secondNumber;
  else if(operationIndex == 2)
    result = firstNumber * secondNumber;
  else result = firstNumber / secondNumber;
  steps.push(firstNumber + ' ' + operation + ' ' + secondNumber + ' = ' + result);
  createSolution(result, steps);
  var a, b;
  if(firstIndex < secondIndex) {
    a = firstIndex;
    b = secondIndex;
  } else {
    a = secondIndex;
    b = firstIndex;
  }
  numbers.splice(b, 1);
  numbers.splice(a, 1);
  numbers.push(result);
  if(numbers.length > 1)
    computeSolution(numbers, steps);
}

function computeSolution(numbers, steps) {
  for(var firstIndex = 0; firstIndex < numbers.length - 1; firstIndex++) {
    for(var secondIndex = firstIndex + 1; secondIndex < numbers.length; secondIndex++) {
      for(var operationIndex = 0; operationIndex < OPERATIONS.length; operationIndex++) {
        var reverse = operationIndex == 1 || operationIndex == 3;
        addStep(numbers, steps, firstIndex, secondIndex, operationIndex);
        if(reverse)
          addStep(numbers, steps, secondIndex, firstIndex, operationIndex);
      }
    }
  }
}

computeSolution(ALL_NUMBERS, []);
console.log('all solutions explored : ' + solutionsCount);