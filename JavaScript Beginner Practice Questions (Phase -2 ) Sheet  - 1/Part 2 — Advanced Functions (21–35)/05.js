// Write a function that memoizes factorial calculation.

const memoizedFactorial = (() => {
  const cache = {}; // Magic box that stores the results

  function fact(n) {
    if (n <= 1) return 1;
    if (n in cache) return cache[n]; // Return the value if it exists in the cache

    // Calculate, save in cache, and return
    cache[n] = n * fact(n - 1);
    return cache[n];
  }

  return fact;
})();

// Example Usage:
console.log(memoizedFactorial(5)); // 120 (Calculates 1 through 5)
console.log(memoizedFactorial(6)); // 720 (Short-circuits: uses cached 5! -> 6 * 120)
