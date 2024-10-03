class Animal {
    name
    speed = 0
    #alive = true

    constructor(name) {
        this.name = name;
    }

    isAlive() {
        return this.#alive;
    }

    toString() {
        let state = this.#alive ? "vivo" : "muerto";
        return this.name + " está " + state;
    }

    move() {
        return "No sé cómo";
    }

    cutTheNeck() {
        this.#alive = false;
    }

}

let pepe = new Animal('Pepe');
console.log("pepe es " + pepe);
console.log(pepe.isAlive());
console.log(pepe.toString());

class Terrestrial extends Animal {
    #site = "land"

    constructor() {
        super();
    }

    run () {
        console.log("Está corriendo");
    }

    move() {
       return "Estoy corriendo" 
    }

    get realSpeed() {
        if (this.#site == "land") {
            return this.speed;
        } else if (this.#site == "water") {
            return this.speed / 4;
        } else {
            return 0;
        }
    }

    get site() {
        return this.#site; 
    }

    set site(newSite) {
        if (['land', 'water'].includes(newSite)) this.#site = newSite;
    }
}

class Aquatic extends Animal{
    site = "water"

    swim() {
        console.log("Está nadando");
    }

    move() {
        return "estoy nadando"
    }

    dive() {
        return "estoy buceando";
    }

    cutTheNeck() {};
}

let chicken = new Terrestrial('Litle');
chicken.speed = 14;
console.log(chicken.toString());

let shark = new Aquatic('White');
shark.speed = 43;
console.log(shark.toString());

console.log('--------------');
let jungle = [pepe, chicken, shark];
jungle.forEach(animal => console.log(animal.name, animal.move()));
console.log('--------------');
jungle.filter(animal => animal instanceof Aquatic).forEach(animal => console.log(animal.name, animal.dive()));
console.log('---Animales que están vivos----');
console.log(jungle.filter(animal => animal.isAlive()));
console.log('---Matamos al pollo----');
console.log(chicken);
chicken.cutTheNeck();

console.log('---Matamos al tiburón----');
shark.cutTheNeck();

console.log('---Animales que están vivos----');
console.log(jungle.filter(animal => animal.isAlive()));
console.log(chicken.site, chicken.realSpeed);
chicken.site="water";
chicken.site="air";
console.log(chicken.site, chicken.realSpeed);
