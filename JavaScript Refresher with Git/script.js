function calculateArea(radius) {
    const PI = 3.14159;
    const area = PI * radius * radius;
    console.log(`Area of circle with radius ${radius}: ${area}`);
  }
  
  function compareNumbers(a, b) {
    const larger = a > b ? a : b;
    console.log(`The larger number between ${a} and ${b} is ${larger}`);
  }
  

  calculateArea(5);
  calculateArea(10);
  compareNumbers(7, 12);
  compareNumbers(15, 8);

  const numbers = [1, 2, 3, 4, 5];


const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);


const greaterThanTwo = numbers.filter(num => num > 2);
console.log('Numbers > 2:', greaterThanTwo);

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('Honda', 'Civic', 2018);
  
  console.log(car1.getCarInfo());
  console.log(car2.getCarInfo());

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  };

  const { name, email, address: { city } } = user;
  console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
  
  const updatedUser = { ...user, email: 'john.new@example.com' };
  console.log('Updated user:', updatedUser);

  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const button = document.getElementById('submitBtn');
    const output = document.getElementById('output');
  
    button.addEventListener('click', () => {
      output.textContent = input.value;
      input.value = '';
    });
  });