function FibonacciSync(n: number, callback: (value: number) => void) {
  if (n < 2) {
    callback(n);
  } else {
    let pre_1 = 0,
      pre_2 = 1,
      value = 0;
    for (let i = 1; i < n; i++) {
      value = pre_1 + pre_2;
      pre_1 = pre_2;
      pre_2 = value;
    }
    callback(value);
  }
}

FibonacciSync(8, console.log);
FibonacciSync(7, console.log);
FibonacciSync(6, console.log);
FibonacciSync(5, console.log);
FibonacciSync(4, console.log);
FibonacciSync(3, console.log);
FibonacciSync(2, console.log);
FibonacciSync(1, console.log);
FibonacciSync(0, console.log);
