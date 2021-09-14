process.on("message", message => {
      //child process is listening for messages by the parent process
      const result = sumOfPrimes(message.number)
      process.send(result)
      process.exit() // make sure to use exit() to prevent orphaned processes
    })
    function sumOfPrimes(n) {
        var sum = 0
        for (var i = 2; i <= n; i++) {
          for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
              break
            }
          }
          if (j > i / 2) {
            sum += i
          }
        }
        return sum
    }  
    // function isPrime(number) {
    //   let isPrime = true
    //   for (let i = 3; i < number; i++) {
    //     if (number % i === 0) {
    //       isPrime = false
    //       break
    //     }
    //   }
    //   return {
    //     number: number,
    //     isPrime: isPrime,
    //   }
    // }