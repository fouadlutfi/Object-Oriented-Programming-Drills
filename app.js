// friends 
let person1 = {
         firstName:'Cash',
          sayHello: function() {
          console.log(`Hello, my name is ${this.firstName}.`);
        }
     };
         
     let person2 = {
        firstName:'Morgan',
         sayHello: function() {
         console.log(`Hello, my name is ${this.firstName}.`);
       }
    };
        
    let person3 = {
        firstName:'Andrew',
         sayHello: function() {
         console.log(`Hello, my name is ${this.firstName}.`);
       }
    };
        
    let person4 = {
        firstName:'Brian',
         sayHello: function() {
         console.log(`Hello, my name is ${this.firstName}.`);
       }
    };
        
    let person5 = {
        firstName:'daniel',
         sayHello: function() {
         console.log(`Hello, my name is ${this.firstName}.`);
       }
    };
        
    class Person {
        constructor(name, city, age) {
            this.name = name;
            this.city = city;
            this.age = age;
        }
    
        greeting() {
            console.log(`Hey! My name is ${this.name}! I am ${this.age}, and I am from ${this.city}.`);
    
        }
    }
    let p1 = new Person('Cash', 'Reno', 67);
    let p2 = new Person('Morgan', 'Trussville', 26);
    let p3 = new Person('Andrew', 'Pleasant Grove', 25);
    let p4 = new Person('Brian', 'Oak Grove', 25);
    let p5 = new Person('daniel', 'helena', 29);
    
    p1.greeting();
    p2.greeting();
    p3.greeting();
    p4.greeting();
    p5.greeting();


//inheritatance drill  - properties manufacturer and number of wheels


class Vehicle {
    constructor(manufacturer, numberOfWheels){
        this.manufacturer = manufacturer;
        this.numberOfWheels = numberOfWheels;
    }
    aboutVehicle(){
        console.log(`This is vehicle is made by ${this.manufacturer} and has ${numberOfWheels}.`)
    }
}

class Truck extends Vehicle{
    constructor(manufacturer, numberOfWheels, numberOfDoors, truckBed){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.truckBed = truckBed;
    }
    aboutVehicle(){
        console.log(`This vehicle is a truck, and is a ${this.manufacturer} and has ${this.numberOfWheels} of wheels, ${this.numberOfDoors} doors, and has a truck bed ${this.truckBed}.`)
    }
}
t1 = new Truck("titan", 4, 2, true);
t1.aboutVehicle();

class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, numberOfDoors, size, mpg){
        super(manufacturer, numberOfWheels);
        this.size = size;
        this.mpg = mpg;
        this.numberOfDoors = numberOfDoors;
    }
    aboutVehicle(){
        console.log(`This vehicle is a sedan, it is of size ${this.size}, gets ${this.mpg} miles per gallon, has ${this.numberOfDoors} doors,${this.numberOfDoors} doors, and is made by ${this.manufacturer}.`)
    }
}
s1 = new Sedan("toyota", 4, 4, "small", 45, true);
s1.aboutVehicle();

class Motorcycles extends Vehicle{
    constructor(manufacturer, numberOfWheels, handlebars, steeringWheel, doors){
        super(manufacturer, numberOfWheels);
        this.handlebars = handlebars;
        this.steeringWheel = steeringWheel;
        this.doors = doors;
    }
    aboutVehicle(){
        console.log(`This is a motorcycle, made by ${this.manufacturer}, has ${this.numberOfWheels} wheels, has handlebars ${this.handlebars}, is there a steeringwheel present? ${this.steeringWheel} and are there doors present? ${this.doors}.`)
    }
}
m1 = new Motorcycles("Yamaha", 2, true, false, false);
m1.aboutVehicle();