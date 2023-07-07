/******************************************************/
/*                  Array                             */
/*                                                    */
/*                                                    */
/*  Collection of heterogeneous data type items       */
/*  You can have duplicates                           */
/*  It can have empty elements                        */
/*  Arrays are mutable                                */
/*                                                    */
/******************************************************/

let arr1 = Array()
let arr2 = Array(4)
let arr3 = "".split('')
let arr4 = []
let arr5 = [1,2,3,4]
let arr6 = Array(1,2,3,4)
let arr7 = "1234".split('')

////console.log(arr1,arr2,arr3,arr4,arr5,arr6,arr7)

let FrontEnd = ["HTML", "CSS", "Javascript", "React", "MongoDB", 'android']

// //console.log(FrontEnd[4])
// //console.log(FrontEnd.length)
// //console.log(FrontEnd[FrontEnd.length-1])
// //console.log(FrontEnd[50])

FrontEnd[4] = "Angular"
// //console.log(FrontEnd)

let str1 = "Angular"
// //console.log(str1[4])

// str1[4] = "X"
// //console.log(str1)

////console.log(FrontEnd.length)

//FrontEnd[80] = "VueJS"

////console.log(FrontEnd.length)


// Array Methods
//1. Fill
let arr10 = Array(5).fill("A")
let arr11 = [1,2,4,5].fill("B")


//2. Concat Method
let new_array = arr10.concat(arr11)
// //console.log(new_array)
// //console.log(arr10)

//3. indexOf Method ==> Search
// //console.log(FrontEnd.indexOf('VueJs'))


//4. includes Method ==> Search
// //console.log(FrontEnd.includes('React') )


//5. isArray Method ==> Whether it is an array or not
// //console.log(Array.isArray(str1))
// //console.log(Array.isArray(FrontEnd))


//6. Methods to convert array to String
// //console.log(FrontEnd.toString())
// //console.log(FrontEnd.join())
// //console.log(FrontEnd.join(''))


//6. Methods to Add Elements to Existing array
FrontEnd[FrontEnd.length] = 'VueJs'	//at the end
FrontEnd[6] = 'JQuery'				//at particular index
FrontEnd.push('VenilaJS')			//at the end
FrontEnd.unshift('BootStrap')		//at the begining
FrontEnd.splice(2,0,1,2,3,5)	   //at the particular index (1st parameter is index, 
                                   //2nd parameter indicates how many elements to be removed
                                   //3rd parameter onwards we can give array elements
// //console.log("Before ==> ", FrontEnd)

//6. Methods to Delete Elements to Existing array
//FrontEnd.pop()          
//FrontEnd.shift()    
//FrontEnd.splice(7,3)



//7. Create a sub array from an array


let new_array1 = FrontEnd.slice(1,FrontEnd.length)


////console.log("new_array1 ==> ", new_array1)


//8. Reverse an array
FrontEnd.reverse()
//console.log("After ==> ", FrontEnd)


// let word = prompt("Enter a string")
// let rev_word = word.split('')
// rev_word.reverse()
// rev_word = rev_word.join('')

// if (word == rev_word){
//     //console.log("The given word is palindrome")
// }
// else{
//     //console.log("Its not!!!")
// }

// FrontEnd.sort()
// //console.log(FrontEnd)


let a = [
        [4, 5, 6.5, NaN, undefined, "ok", console.log, {}, [10,11,12], null],
    ]


for (const i of [1,2,3,4,5]){
    console.log(i)
}
