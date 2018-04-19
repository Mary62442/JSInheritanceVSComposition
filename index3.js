class Person {
	constructor(first, last, age, gender) {
		this.name = {
			first,
			last
		};

		this.age = age;
		this.gender = gender;
	};

	language(language)  {console.log(this.name.first + ' speaks ' + language)};
};

class Developer extends Person {

	constructor(first, last, age, gender, specialty) {
		super(first, last, age, gender);
		this.specialty = specialty;
	}
	isRich(isRich) {
		if (isRich) console.log( this.name.first + ' is rich.');
		else console.log(this.name.first + " isn't rich");
	}
}

var developer = new Developer('Bill','Gates', '60ish', 'Male', 'Microsoft');

console.log(developer);
developer.language('English');
developer.isRich(true);
