// Destructuring

let employee  = [["Sachin", "ok@ok.com", "Bangalore", "Batting", "Bowling", "Fielding"],
	             ["Rohit", "ok2@ok2.com", "Mumabi", "Batting", "Captaincy", "Fielding"]]


let SachinsData = ["Sachin", "ok@ok.com", "Bangalore", "Batting", "Bowling", "Fielding"]
let RohithsData = ["Rohit", "ok2@ok2.com", "Mumabi", "Batting", "Captaincy", "Fielding"]

let employee3 = [...SachinsData]
let employee4 = SachinsData


// SachinsData.pop()
// SachinsData.pop()
// SachinsData.pop()
// employee4.pop()

// console.log(employee4)
// console.log(SachinsData)

let EmployeeData = [{
Name:"Sachin", 
Email:"ok@ok.com", 
Address:"Bangalore", 
Skills:["Batting", "Bowling", "Fielding"],
},{
Name:"Ramesh", 
Email:"ok@ok.com", 
Address:"Bangalore", 
Skills:["Batting", "Bowling", "Fielding"],
},{
Name:"Tendulak", 
Email:"ok@ok.com", 
Address:"Bangalore", 
Skills:["Batting", "Bowling", "Fielding"],
},{
Name:"Gill", 
Email:"ok@ok.com", 
Address:"Bangalore", 
Skills:["Batting", "Bowling", "Fielding"],
},{
Name:"Samson", 
Email:"ok@ok.com", 
Address:"Bangalore", 
Skills:["Batting", "Bowling", "Fielding"],
},{
Name:"Powell", 
Email:"ok@ok.com", 
Address:"Bangalore", 
Skills:["Batting", "Bowling", "Fielding"],
},


]

//let {sadsadasdasdsadsadasdasdadsad:part_number, Email:Em, Address:Adrs, Skills:Skl} = EmployeeData


// for (let {Name, EMail, Address, Skills} of EmployeeData){
// 	console.log(Name)

// }

let SachinsData2 = {
	Name:"Sachin", 
	Email:"ok@ok.com", 
	Address:"Bangalore", 
	Skills:["Batting", "Bowling", "Fielding"],
}



let CopiedSachin = {...SachinsData2, age:40}
let AlsiasedSachin = SachinsData2

SachinsData2.height = 5.3
SachinsData2['weight'] = 65



console.log(CopiedSachin)