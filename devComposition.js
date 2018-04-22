const language = (name, lang) => ({
	language: () => console.log(name + ' speaks ' + lang)
});

const isRich = (name, rich) => ({
	isRich: () => rich ? console.log(name + ' is rich.') : console.log(name + 'is not rich')
});

const person = (first,last,age,gender, lang) => {
	let personState = {
		first,
		last,
		age,
		gender
	}
	return Object.assign({}, personState, language(first, lang));
};

const developer = (first, last, age, gender, lang, specialty, rich) => {
	let developerState = {
		specialty
	}
	return Object.assign(person(first,last,age,gender, lang), developerState, isRich(first, rich)) 
};

let dev = developer('Bill','Gates', '60ish', 'Male','English', 'Microsoft', true);

console.log(dev);
dev.isRich();
dev.language();
