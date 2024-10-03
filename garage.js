class Car {
    registration
    make
    model
    #year
    owner = null;

    constructor(registration, make, model="", year=2024) {
        this.registration = registration;
        this.make = make;
        this.model = model;
        this.#year = year;
    }

    getMakeModel() {
        return this.make + " " + this.model;
    }

    getYear() {
        return this.#year;
    }

    setYear(year) {
        if (year < this.#year) this.#year = year;
    }

    ownerName() {
        if (this.owner) return this.owner.name;
        return undefined;
    }
}

const car1 = new Car('1234ABC', 'Seat');
car1.model = "Ibiza";
console.log(car1);
const car2 = new Car('6543DFT', 'Ford', 'Mustang', 2020);
console.log(car2.getMakeModel());
car2.setYear(2023);
console.log(car2.getYear())
car2.setYear(2013);
console.log(car2.getYear())

class Person {
    #dni = 'No definido';
    name

    constructor(name, dni) {
        this.name = name;
        this.setDNI(dni);
    }

    setDNI(dni = '') {
        if (dni.length == 8) this.#dni = dni;
    }

    getDNI() { return this.#dni}
}

const p1 = new Person('Pepe','12345678');
p1.setDNI();
console.log(p1.getDNI());

car1.owner = p1;
console.log(car1);
console.log(car1.registration);
console.log(p1.name);
console.log(car1.owner.name);
console.log(car1.ownerName());
console.log(car2.ownerName());


