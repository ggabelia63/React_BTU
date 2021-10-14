class vechile{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
}

class Car extends vechile {}

const mycar = new Car('Toyota' , 'prius')

console.log('Car is ' + mycar.make + '  Model is ' + mycar.model)