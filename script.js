//complete this code
class Animal {
//
	constructor (species){
		this._species=species;
		
	}
	// getter method
	get species(){
	return this._species;
	}
	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
}

class Dog extends Animal {
	bark()
	{
		console.log(`woof`);
	}
}

class Cat extends Animal {
	purr()
	{
		console.log(`purr`);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat  = new Cat('Siamese');
myCat.makeSound();
myCat.purr();

const myDog   = new Dog('Golden Retriever');
myDog .makeSound();
myDog .bark();

