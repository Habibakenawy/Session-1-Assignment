/**
 * This function calculates the cost of an employee based on the data in its file
 * @param {string} filePath - path to the employee data file
 * @returns {{name: string, cost: number}} - the name and cost of the employee
 */


function costCalculator(filePath) {
	const fs = require("fs");
	let result;
	try {
	  const data = fs.readFileSync(filePath, "utf8");
	  const employee = JSON.parse(data);
	  const cph = employee["salary"] / employee["hours"];
	  result = { name: employee["name"], cost: cph };
	} catch (err) {
	  console.error(err);
	}
	return result;
  }
  


	// TODO: write your code here
	// DON'T TOUCH ANYTHING OUTSIDE THIS FUNCTION

console.log(costCalculator('mohamed.json'));

module.exports = {
	costCalculator,
};
