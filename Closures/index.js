// Write a function that uses closures to create a private counter. The counter should have methods to
// increment, decrement, and retrieve the current value, but the value itself should not be directly accessible.

function CounterClosure() {
  let counter = 0;
  function increment() {
    counter++;
  }
  function decrement() {
    counter--;
  }
  function retrieve() {
    return counter;
  }
  return { increment, decrement, retrieve };
}

// let count = CounterClosure();
// count.increment();
// count.increment();
// console.log("counter after 2 inc: ", count.retrieve());
// count.decrement();
// console.log("counter after 1 dec: ", count.retrieve());

// Create a function that generates a list of functions, where each function returns its index in the list.
// (For example, if the list has three functions, calling the first function should return 0, the second 1, and so on.)

function generateFunction(n) {
  let func = [];
  for (let i = 0; i < n; i++) {
    func.push(function () {
      return i;
    });
  }
  return func;
}

//let functions = generateFunction(3);
//console.log("calling the first function", functions[0]());
//console.log("calling the second function", functions[1]());

// Write a function that creates a timer using closures. The timer should start at 0, increment by 1
// every second, and provide a method to pause and resume the timer.

function createTimer() {
  let time = 0;
  let timer = 0;
  return {
    start: () => {
      timer = setInterval(() => {
        time++;
        console.log(time);
      }, 1000);
    },
    pause: () => {
      clearInterval(timer);
      console.log(time);
    },
    resume: () => {
      timer = setInterval(() => {
        time++;
        console.log(time);
      }, 1000);
    },
    stop: () => {
      time = 0;
      clearInterval(timer);
    },
  };
}

// let timer = createTimer();
// console.log("Start...");
// timer.start();
// setTimeout(() => {
//   timer.pause();
//   console.log("Paused...");
// }, 6000);
// setTimeout(() => {
//   timer.resume();
//   console.log("Resume...");
// }, 9000);
// setTimeout(() => {
//   timer.stop();
//   console.log("Stop...");
// }, 15000);

// Implement a function that partially applies arguments to another function using closures.
// (For example, const add5 = partial(add, 5); add5(3) should return 8.)

function partial(fn, val1) {
  return function (val2) {
    return fn(val1, val2);
  };
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const add5 = partial(add, 5);
console.log("Add 5 + 3",add5(3));

const sub16 = partial(sub, 16);
console.log("Subtract 16 - 5",sub16(5));


