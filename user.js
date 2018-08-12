function User(name, age) {
	this.name = name;
	this.age = age;
	this.displayInfo = () =>{
		console.log(`Имя: ${this.name} Возраст: ${this.age}`)
	}
}

User.prototype.sayHi = function() {
	console.log(`Приветик меня звать ${this.name}`)
};

module.exports = User;