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
		console.log("Sound");
	}
}

class Dog extends Animal {
	bark()
	{
		console.log("woof");
	}
}

class Cat extends Animal {
	purr()
	{
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const cat  = new Cat('purr');
/* console.log(john.name);  */// Output: John
cat.purr();

const dog  = new Dog('woof');
/* console.log(john.name);  */// Output: John
dog.bark();

