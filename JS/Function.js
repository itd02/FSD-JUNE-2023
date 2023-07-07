/******************************************************/
//						Function
/******************************************************/


// {
// 	let x = 10
// 	let y = 30
// 	let z = x + y
// 	console.log(`Sum of ${x} and ${y} is ${z}`)
// }


// function timeNow()
// {
// 	var utc = new Date().toJSON();
// 	console.log(utc)
// }

// function <name of the function>()
// {
// 	<statements>;
// 	<statements>;
// 	return <value>
// 	<statements>;
// 	<statements>;
// }

// function myFunc(){
// 	console.log("Hi I just invoked!!")
// }

// myFunc()


// function myFunc2(xxxx, yyy,a,b,c,s,d,d,d,d,d,){
// 	console.log(`Hi ${xxxx} ${yyy}, I just invoked 2 !!`)
// }

// myFunc2("Sachin")

// myFunc2()

// myFunc2("Sachin", "Ramesh", 'sadsad')


// function add(x, y)
// {
// 	return "x + y"
// }

// function add()
// {
// 	let x = 10
// 	let y = 20
// 	return x + y
// }

//console.log(add(100, 20))


// function studentGrade(Name, Marks)
// {

// 	if (Marks >= 80){
// 		console.log(`The Student ${Name} has got Distinction`)
// 	}
// 	else if (Marks >= 60){
// 		console.log(`The Student ${Name} has got First Class`)
// 	}
// 	else if (Marks >= 35){
// 		console.log(`The Student ${Name} has got Pass marks`)
// 	}
// 	else {
// 		console.log(`The Student ${Name} is Failed`)
// 	}
// }

	// if (Marks < 35){
	// 	console.log(`The Student ${Name} is Failed`)
	// }
	// else if (Marks < 60){
	// 	console.log(`The Student ${Name} has got Pass marks`)
	// }
	// else if (Marks < 80){
	// 	console.log(`The Student ${Name} has got First Class`)
	// }
	// else {
	// 	console.log(`The Student ${Name} has got Distinction`)
	// }

//studentGrade('Sujay', 80)

//studentGrade('Suresh', 35)

//studentGrade('Ajay', 30)

// unlimited number of parameters 
// function summation(){
// 	console.log(arguments.length)
// 	let sum = 0
// 	for (let v of arr){
// 		sum += v
// 	}
// 	console.log("The summation is", sum)
// }


// summation(1, 4, 5, 6, 8, 9, 3, 22, 3, 3, 4, 556, 90)
// summation(1, 4)
// summation(1, 4, 5, 6, 8, 9)

// Anonymous Function
// let x = function(){
// 	console.log("Hello world")
// }

// Expression Function ==> here x() is Expression Function
//console.log(x())


// Self invoking Function
// (function(num1){
// 	console.log("Hello world",num1)
// })(100)


// Arrow Functions

// function cube(x){
// 	return x * x * x
// }

// let cube = (x, y, z) => {
// 	let out = x * x * x
// 	return out
// }



// Default Parameter Functions

	function printVoterName(Name, Age=30, Group){
		console.log(`The voter name is ${Name}, and he is ${Age} years old`)

	}




printVoterName("Ok", 12)









