let res;
class Car {
  constructor(wheelsNum, enginePower, color) {
    this.wheelsNum = wheelsNum;
    this.enginePower = enginePower;
    this.color = color;
  }
  printShowDetailsInOneString() {
    return (my_p.innerText = `Car Wheels: ${this.wheelsNum} Engine Power:${this.enginePower} Car color: ${this.color}`);
  }
  static returnBiggerEngine(someArray) {
    let big = someArray[0];
    someArray.forEach((item) => {
      if (item.enginePower > big.enginePower) {
        big = item;
      }
    });
    return big;
  }
}

class Bus extends Car {
  constructor(wheelsNum, enginePower, color, type) {
    super(wheelsNum, enginePower, color);
    this.type = type;
  }
  printBusDetailsInOneString() {
    return `${super.printShowDetailsInOneString()} Car Type: ${this.type}`;
  }
}
const busShow = new Bus("6", 3200, "green", "volvo");

class SportCar extends Car {
  constructor(wheelsNum, enginePower, color, type) {
    super(wheelsNum, enginePower, color);
    this.type = type;
  }
  printSportCarDetailsInOneString() {
    return `${super.printShowDetailsInOneString()} Car Type: ${this.type}`;
  }
}
const SportCarShow = new SportCar("4", 2200, "yellow", "porche");

class Suv extends Car {
  constructor(wheelsNum, enginePower, color, type) {
    super(wheelsNum, enginePower, color);
    this.type = type;
  }
  printSuvDetailsInOneString() {
    return `${super.printShowDetailsInOneString()} Car Type: ${this.type}`;
  }
  resultInUpperCase() {
    return (res = `${this.type[0].toUpperCase()} ${this.type.substring(
      1,
      this.type.length - 2
    )} ${this.type[this.type.length - 1].toUpperCase()}`);
  }
  get result() {
    return `${this.resultInUpperCase()}`;
  }
}
const suvShow = new Suv(6, 6200, "black", "chevrolet");
console.log(suvShow.result);
const myArray = [busShow, SportCarShow, suvShow];
console.log(Car.returnBiggerEngine(myArray));

let empty;
function sendForm() {
  empty = new Car(Carwheels.value, input_color.value, input_engine.value);
  tr_head.innerHTML+= `<td>${empty.wheelsNum}</td> <td>${empty.enginePower}</td><td>${empty.color}</td>`
}
