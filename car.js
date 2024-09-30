const car = {
  registration: '9234ABC',
  make: 'FORD',
  model: 'FOCUS',
  year: 2008,
  getMakeModel() {
    return this.make + " " + this.model;
  },
  thisYearHasITV() {
    let yearLife = (new Date()).getFullYear() - this.year;
    if (yearLife < 4) return false;
    if (yearLife > 10) return true;
    return yearLife % 2 == 0;
  },
  toString() {
    return `(${this.registration} - ${this.make} - ${this.model} - ${this.year})`;
  }
};

console.log(car);
console.log(car.toString());
console.log(car.getMakeModel());
console.log(car.thisYearHasITV());

//let car2 = car;
//let car2 = {};
//Object.assign(car2, car);
let car2 = {...car};
// let carString = JSON.stringify(car);
// let car2 = JSON.parse(carString);
//let car2 = structuredClone(car);
car2.make = "Ferrari";
car2.model = "Laferrari";
console.log('car:', car.toString());
console.log(car2);
console.log('car2:', car2.toString());
console.log(car == car2);

let car3 = {...car,
    make: 'Seat',
    model: 'Panda'
}

console.log(car3.toString());

let garage = [car, car2, car3];
car2.registration = "4567CDE";
car2.year = 2011;
car3.registration = "9876HGJ";
car3.year= 2021;
console.log(garage);
// car2.toString = function() {
//     return `[ ${this.registration} ]`;
// }
console.log('Coches Ford: ', garage.filter(c => c.make == 'FORD').map(c => c.toString()));
console.log('Coches posterior a 2010: ', garage.filter(c => c.year > 2010).map(c => c.toString()));
console.log('ITV: ', garage.some(c => c.thisYearHasITV()));
garage.sort((c1, c2) => c2.year - c1.year);
console.log("orden year:", garage.map(c => c.toString()));
garage.sort((c1, c2) => c1.make.toLowerCase().localeCompare(c2.make.toLowerCase()));
console.log("orden marca:", garage.map(c => c.toString()));
garage.sort((c1, c2) => c1.getMakeModel().toLowerCase().localeCompare(c2.getMakeModel().toLowerCase()));
console.log("orden marca y modelo:", garage.map(c => c.toString()));
console.log("marcas: ", garage.map(car => car.make));