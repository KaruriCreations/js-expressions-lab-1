//! Start by creating the variables for the data recorded
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const celsiusToFahrenheit = celsiusTemps.map(temp => (temp * 9 / 5) + 32);
const fahrenheitToCelsius = fahrenheitTemps.map(temp => (temp - 32) * 5 / 9);

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const allInFahrenheit = fahrenheitTemps.concat(celsiusToFahrenheit);
const allInCelsius = celsiusTemps.concat(fahrenheitToCelsius);

const tot_temperature_in_fahrenheit = allInFahrenheit.reduce((acc, curr) => acc + curr, 0);
const tot_temperature_in_celsius = allInCelsius.reduce((acc, curr) => acc + curr, 0);

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allInFahrenheit.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / allInCelsius.length;

console.log(`Total Fahrenheit: ${tot_temperature_in_fahrenheit}`);
console.log(`Average Fahrenheit: ${avg_temperature_in_fahrenheit.toFixed(2)}`);
console.log(`Total Celsius: ${tot_temperature_in_celsius}`);
console.log(`Average Celsius: ${avg_temperature_in_celsius.toFixed(2)}`);

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};