let square = x => x * x;
console.log(square(9));

let user = {
	name: 'Anthony',
	//Below, uses global this keyword
	sayHi: () => {
		console.log(`Hi. I'm ${this.name}`);
	},
	//Below, works as normal method with local this keyword
	sayHiAlt() {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

user.sayHiAlt(1, 2, 3);
