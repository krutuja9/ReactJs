// Closure example
function counter() {
  let count = 0; // This count variable is enclosed in the closure

  return function() {
      count += 1;
      console.log(`Count is now: ${count}`);
  };
}

const incrementCounter = counter();
incrementCounter(); // Count is now: 1
incrementCounter(); // Count is now: 2

// ES6 Promise example
const fetchData = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const data = { message: 'Data fetched successfully!' };
          resolve(data);
      }, 1000); // Simulates a network request with 1 second delay
  });
};

// Using async/await to handle the promise
const getData = async () => {
  try {
      const result = await fetchData();
      console.log(`Result: ${result.message}`);
  } catch (error) {
      console.error('Error:', error);
  }
};

getData(); // Result: Data fetched successfully!
