/******************************************************/
/*                  Numbers                          */
/******************************************************/


//let age = 20
let height = 5.7
const PI = 3.142

// console.log(Math.round(PI))
// console.log(Math.round(height))
// console.log(Math.ceil(PI))
// console.log(Math.pow(4, 3))


/******************************************************/
/*                  Strings                          */
/******************************************************/



let blank = ' '
let firstName = 'Virat'
let lastName = 'Kohli'


let bioData = `Virat Kohli (Hindi pronunciation: 
	born 5 November 1988) is an Indian international 
    cricketer and the former captain of the Indian national 
    cricket team who plays as a right-handed batsman for 
    Royal Challengers Bangalore in the IPL and for Delhi 
    in Indian domestic cricket. Widely regarded as one of 
    the greatest batsmen of all time,[4] Kohli holds the 
    records for scoring most runs in T20 internationals 
    and in the IPL. In 2020, the International Cricket 
    Council named him the male cricketer of the decade. 
    Kohli has also contributed to India's 
    successes, including winning the 2011 
    World Cup and the 2013 Champions trophy.`


let fullName = firstName + ' ' + lastName
// console.log(firstName)
// console.log(lastName)
// console.log(fullName)

let something = 'Virat Kohli (\'Hindi\' pronunciation: born 5 November 1988) is an Indian international '


//console.log(something)


let num1 = 200
let num2 = 100
//console.log("The sum of "+ num1 + " and "+ num2 + " is  "+ sum)
//console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)


//console.log(lastName)
//console.log(lastName[lastName.length-2])
//console.log(lastName.length)

//console.log(lastName.toUpperCase())
//console.log(bioData.length)
//console.log(bioData.substr(663,17))
//console.log(lastName.length)
//console.log(lastName[5])

//console.log(lastName)
//console.log(lastName.substring(2, 3))


let team = "Royal Challengers Bangalore"
//console.log(team.split('Challengers'))
let someText = "          Challengers            "
//console.log(someText.trim().length)


let new_string = bioData.replace('Indian', 'African')


// console.log(bioData.includes('trophy'))
// console.log(bioData.startsWith('trophy'))
// console.log(bioData.endsWith('trophy'))
// console.log(bioData.indexOf('cricket'))
// console.log(bioData.lastIndexOf('cricket'))
// console.log(bioData.indexOf('Football'))


let name = 'Virat'
// let age = 33

// let desc1 = "Hi My Name is "
// let desc2 = " and I am "

// //desc1 = desc1.concat(name, desc2, age, " years old.")
// //console.log(name.repeat(10))


// let pattern_year = /\d{10}/g
// let pattern_cricket = 'cricket'

// //console.log(bioData.match(pattern_cricket))
// //console.log(bioData.search(pattern_cricket))


// console.log(bioData.charCodeAt(50))

//console.log(name.split('').reverse().join(''))


/******************************************************/
/*                  Booleans                          */
/******************************************************/


let something = []

if (something){
	console.log('Yes it is True')
}
else{
	console.log('It is False')
}

/* 
Truthy Values
	1. Any number  except 0, Whether it is +ve or -ve are truthy values
	2. Any Non-empty String
	3. Boolean with true
	4. if any Array length is not Zero

Falsy Values
	1. 0
	2. ''
	3. NaN
	4. Undefined
	5. null
	6. false

*/