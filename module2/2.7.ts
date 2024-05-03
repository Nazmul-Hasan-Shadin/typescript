{
 
    // generic constrants  with keyof operator 


 
 type vehicle={
    bike:string;
    car:string;
    ship:string
 }

type Owner ="bike" | "car" | "ship"

type Owner2 = keyof vehicle


const person1:Owner2='car'


 const user={
    name:'Mr shadin',
    age:333,
    address:'ciy',
    height:44
 }

//  user[age]


function getPropertyValue<x,y extends keyof x>(obj:x,key:y){
  
    return obj[key]
}

const result= getPropertyValue(user,'name')












}