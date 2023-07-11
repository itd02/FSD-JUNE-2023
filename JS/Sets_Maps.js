// Set

	let names =	['Ravindra Jadeja',
	'Axar Patel',
	'Ajinkya Rahane',
	'Shardul Thakur',
	'Mukesh Kumar','Ravindra Jadeja']


	let cricketers = new Set(names)

	//add

	cricketers.add("Sachin")
	cricketers.delete("Shardul Thakur")
	//console.log(cricketers.has("Ajinkya Rahane"))	

	//Union in Sets
	let a = [1,2,3,4,5]
	let b = [4, 5, 6,7,8,9,10]
	//let a_b = a.concat(b)
	//let a_b = (a + b).split(',')
	let a_b = [...a,...b]

	let AB = new Set(a_b)
	//console.log(AB)


	//Inserection in Sets
	let A = new Set(a)
	let B = new Set(b)

	let c = a.filter(el => B.has(el))
	let C = new Set(c)

	//console.log(C)

	//Difference in Sets
	let d = a.filter(el => !B.has(el))
	let D = new Set(d)

	//console.log(D)



// Maps

	let states = [
		["Assam", "Dispur"],
		["Arunachal Pradesh", "Itanagar"],
		["Bihar", "Patna"],
		["ChattisGarh", "ChattisGarh"],
		["Karnataka", "Bangalore"],
		["Meghalaya", "Shilong"],
	]


	let mapOfStates = new Map(states)

	console.log(mapOfStates.get('Karnataka'))









	