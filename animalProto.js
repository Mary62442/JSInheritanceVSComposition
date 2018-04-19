function Animal(name) {

	this.name = name;
}

Animal.prototype.sleep = function() {console.log(this.name + ":zzz...")}
Animal.prototype.eat = function() {console.log(this.name + ": yummy!")}

function Cat(name) {this.name = name};

Cat.prototype = Object.create(new Animal());

Cat.prototype.meow = function() {console.log(this.name + ": meow!")};

var cat = new Cat('Miao');

cat.meow();
cat.sleep();
cat.eat();

function Beaver(name) {this.name = name};
Beaver.prototype = Object.create(new Animal());
Beaver.prototype.build =  function() {console.log(this.name + ": building a dam")};

var beaver = new Beaver('Beavy');

beaver.build();
beaver.sleep();
beaver.eat();

function Persian(name) {this.name = name};
Persian.prototype = Object.create(new Cat());
Persian.prototype.longFur = function() {console.log(this.name + " has long fur: " + true)};

var persian = new Persian('Percy');
persian.meow();
persian.eat();
persian.sleep();
persian.longFur();




