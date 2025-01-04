let temperature = { celsius: 0, fahrenheit: 32 }; //1
let handler = {
  //2
  set(target: any, key: string, value: number): boolean {
    //3
    target[key] = value; //4
    switch (key) {
      case 'celsius':
        target.fahrenheit = calculateFahrenheit(value); //5
        break;
      case 'fahrenheit':
        target.celsius = calculateCelsius(value);
    }
    return true;
  },
  get(target: any, key: string) {
    return target[key]; //6
  },
};
let degrees = new Proxy(temperature, handler); //7
// Auxiliar functions
function calculateCelsius(fahrenheit: number) {
  return (fahrenheit - 32) / 1.8;
}
function calculateFahrenheit(celsius: number) {
  return celsius * 1.8 + 32;
}
degrees.celsius = 25; //8
console.log(degrees);
// Prints in the console:
// {celsius:25, fahrenheit:77}             //9

degrees.fahrenheit = 100; //10
console.log(degrees);
