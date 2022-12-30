/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/
function convertTemperate(isCelsius, temperature){
  if(isCelsius){
    return (temperature * 9 / 5 + 32).toFixed(2);
  }
  return (5 / 9 * (temperature - 32)).toFixed(2);
}
console.log(109.99, "Fahrenheit => Celsius", convertTemperate(false, 109.99));
console.log(43.33, "Celsius => Fahrenheit", convertTemperate(true, 43.33));