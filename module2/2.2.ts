{


//  interface 

type User1= {
    name:string;
    age:number;

}



interface User2{
    name: string;
    age:number
}



 
type UserWithROle1= User1 & {role:string}

 interface UserWithRole2 extends User2 {
    role:string
 }

const user1:UserWithRole2={
    name:'person',
    age:100,
    role:'manager'
}


// array type declear with interace

type Roll1=number[];

interface Roll2 {
    [index:number]:number
}

const rollNumber1:Roll2=[23,3,4]


type Add= (num1:number,num2:number)=>number
 
interface Add2 {
    (num1:number,num2:number):number
}

const add:Add2=(num1,num2)=>num1 + num2
























}