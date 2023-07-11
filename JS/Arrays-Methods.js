// HOFs
/**
Higher Order Functions:
	 1. Functions Which take other function as a parameter or
	 2. Functions Which return other function

*/


// function sqr1(number){
// 	return number * number
// }


// function sqr2(number){
// 	return number ** 2
// }


// function adder(param){
// 	return param + param
// }


// function some(){
// 	return "Hello I am a callback function"
// }

// function main(x,y){
// 	return x(y)
// }

// let out = main(sqr2,10)

// console.log(out)



// let out = cube(sqr1, 10)

// console.log(out)

// function main(){
// 	function sub(){
// 		return "Hey I am Sub Funtion!!"
// 	}
// 	console.log("Hey I am Main Funtion!!")
// 	return sub
// }

// let x = main()()



// function delay(seconds){
// 	let calc_delay = 1000000000 * seconds
// 	for (let x=0; x < calc_delay; x++)
// 	{

// 	}
// }


// function perform_something(x, del_sec){
// 	console.log("I am performing something!!")
// 	x(del_sec)
// 	console.log("Yes I did It")
// }

// perform_something(delay, 10)


// function perform_something(){
// 	console.log("I am performing something!!")
// }

//setTimeout(perform_something, 5000)

//setInterval(perform_something, 1000)

// forEach
let x = [1, 2, 4, 5]
// sum = 0
// let y1 = x.forEach(el => sum+=el)
// console.log('forEach ==>', sum)



// map
// let y2 = x.map(function(v){return v*2})
// let y3 = x.map(v => v*2)

// console.log('Map ==>', y2)
// console.log('Map ==>', y3)

// let names = ['Ravindra Jadeja',
// 'Axar Patel',
// 'Ajinkya Rahane',
// 'Shardul Thakur',
// 'Mukesh Kumar']
// let y3 = names.map(name => name.toUpperCase())
// console.log('Map ==>', y3)


// filter
// let voter_list = [2,3,4,5,17,18,29,33,86]

// let names = ['Ravindra Jadeja',
// 'Axar Patel',
// 'Ajinkya Rahane',
// 'Shardul Thakur',
// 'Mukesh Kumar']

// let first_name = names.map(el => el.split(' ')[0].endsWith('a'))

// let first_name_ends_with_a = names.filter(el => (el.split(' ')[0]).endsWith('a'))

// console.log('first_name ==>', first_name)
// console.log('first_name_ends_with_a ==>', first_name_ends_with_a)


// console.log("Meghana KR".split(' ')[0].endsWith('a'))



// reduce

// let number = [1,2,3,4,5]


// let names = ['Ravindra Jadeja',
// 'Axar Patel',
// 'Ajinkya Rahane',
// 'Shardul Thakur',
// 'Mukesh Kumar']



// let sum = names.reduce((init, el)   =>  init+", "+el.split(' ')[0], "===>")

// console.log(sum)


// Every
let number = [1,2,3,4,5]
let names = ['Ravindra Jadeja',
'Axar Patel',
'Ajinkya Rahane',
'Shardul Thakur',
'Mukesh Kumar']

let boolean_array = [false, false, false, false, false]
// console.log(number.every(el => el <= 5))


// // Some
// let boolean_array = [false, false, false, true, false]
// console.log(boolean_array.some(el => el == true))



// // Find
// let voter_list = [18,29,26, 33,86, 16]
// //console.log(voter_list.find(el => el < 18))


// // FindIndex
// console.log(voter_list.findIndex(el => el < 18))

// let number_n = [1,[2,3],4,5]

// console.log(number_n)

// console.log(number_n.flat())
