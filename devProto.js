function Person(first, last, age, gender) {

	this.name = {
		first,
		last
	};

	this.age = age;
	this.gender = gender;
};


Person.prototype.language = function(language) {console.log(this.name.first + ' speaks ' + language)};


function Developer(first, last, age, gender, specialty) {
	Person.call(this,first,last,age,gender);
	
	this.specialty = specialty;
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.isRich = function(isRich) {
	if (isRich) console.log( this.name.first + ' is rich.');
	else console.log(this.name.first + " isn't rich");
}

var developer = new Developer('Bill','Gates', '60ish', 'Male', 'Microsoft');

console.log(developer);
developer.language('English');
developer.isRich(true);
