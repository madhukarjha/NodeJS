const fibonacci = n => {
    if (n <= 1) {
      return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

const result = fibonacci(30);
console.log(result);