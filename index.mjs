import { performance } from "perf_hooks";

/**
 * Measures the performance of a given module
 * @param {string} fileName
 */
async function loadAndMeasurePerformance(fileName) {
  try {
    // Dynamically import the specified module
    const { main, testCases } = await import(fileName);

    // Variables to store execution times
    let totalExecutionTime = 0;

    // Number of iterations
    const iterations = 1000;

    // Execute main function by iterations times
    for (let i = 0; i < iterations; i++) {
      // Execute each test case
      for (let testCase of testCases) {
        const startTime = performance.now();
        await main(testCase.input);
        const endTime = performance.now();

        // TODO: check output

        // Accumulate execution time
        totalExecutionTime += endTime - startTime;
      }
    }

    // Calculate average execution time
    const averageExecutionTime =
      totalExecutionTime / (iterations * testCases.length);

    // Log average execution time
    console.log(
      `Average execution time over ${iterations} iterations and ${
        testCases.length
      } cases: ${averageExecutionTime.toFixed(4)} milliseconds`
    );
  } catch (error) {
    // Log errors if the import fails or if the execution fails
    console.error("Error loading or executing module:", error);
  }
}

// Access the module name provided as a command-line argument
const moduleName = process.argv[2]; // The first real argument is at index 2

// Validate that a module name was provided
if (!moduleName) {
  console.error(
    "Please provide a module name as an argument. Usage: npm start -- your-module.mjs"
  );
  process.exit(1);
}

// Run this script through an npm script with: npm start -- my-module.mjs
loadAndMeasurePerformance(moduleName);
