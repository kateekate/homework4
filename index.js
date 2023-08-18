// Task 1 

function concatStrings(initialValue, separator) {
  if (typeof initialValue !== 'string') {
    return '';
  }

  if (typeof separator !== 'string') {
    separator = '';
  }

  return function concatNext(nextValue) {
    if (typeof nextValue !== 'string') {
      return initialValue;
    }

    initialValue += `${separator}${nextValue}`;

    return concatNext;
  }
}

// Task 2 

class Calculator {
  #x;
  #y;

  constructor(x, y) {
    if (arguments.length !== 2) {
      throw new Error('Ошибка!');
    }

    if (!this.#isValidNumber(x) || !this.#isValidNumber(y)) {
      throw new Error('Ошибка!');
    }

    this.#x = x;
    this.#y = y;
  }

  #isValidNumber(num) {
    return typeof num === 'number' && isFinite(num);
  }

  setX = (num) => {
    if (!this.#isValidNumber(num)) {
      throw new Error('Ошибка!');
    }

    this.#x = num;
  }

  setY = (num) => {
    if (!this.#isValidNumber(num)) {
      throw new Error('Ошибка!');
    }

    this.#y = num;
  }

  logSum = () => {
    console.log(this.#x + this.#y);
  }

  logMul = () => {
    console.log(this.#x * this.#y);
  }

  logSub = () => {
    console.log(this.#x - this.#y);
  }

  logDiv = () => {
    if (this.#y === 0) {
      throw new Error('Ошибка!');
    }

    console.log(this.#x / this.#y);
  }
}