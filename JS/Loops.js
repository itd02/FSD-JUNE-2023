// Loops


/******************************************************/
//						For Loop
/******************************************************/
// For Loops
// for(let i = 0; i < 10;  i++)
// {
// 	if (i==4){
// 		break;
// 	}
// 	console.log(`The square of ${i} is ${i ** 2}`)
// 	console.log(`Hello World!!!`)
// }


let i = 0;



/******************************************************/
//						While Loop
/******************************************************/

// while (condition)
// {
// 	console.log(`Today is a Good Day!!!`)
// 	i++
// 	if (i == 3){
// 		condition = false
// 	}
// }


// let condition = false

// while(condition)
// {
// 	console.log("I have been executed ====> 1!!!")
// }



/******************************************************/
//						Do While Loop
/******************************************************/

// do{
// 	console.log("I have been executed ====> 2!!!")
// }
// while(condition)




/******************************************************/
//						'For of' Loop
/******************************************************/


let FrontEnd = ["HTML", "CSS", "Javascript", "React", "MongoDB", 'android']

let str = 'Javascript'


for (let c of FrontEnd)
{
	
	if (c==str){
		continue;
	}
	console.log(c)
}


// // for (let c of str){
// // 	console.log(c)
// // }

// // for (let i=0; i<FrontEnd.length;i++){
// // 	console.log(`the value at index ${i} is ${FrontEnd[i]}`)
// // }


// /******************************************************/
// //						'For in' Loop
// /******************************************************/

// // for (let i in FrontEnd)
// // {
// // 	console.log(`the value at index ${i} is ${FrontEnd[i]}`)
// // }