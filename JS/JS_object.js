let Student = {
	firstName:'Shubhaman',
	lastName:'Gill',
	age:20,
	height:5.9,
	skills:['HTML', 'CSS', 'JS', 'React'],
	details: function(){
		return `${this.firstName}, ${this.lastName}, is ${this.age} years old, and he is very good in ${this.skills}`
	}
}

Student.country = "India"
console.log(Object.entries(Student))
console.log(Student.hasOwnProperty('skills'))