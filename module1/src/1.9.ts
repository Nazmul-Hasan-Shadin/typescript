
{

 
  type student={
    name:string;
    age:number;
    gender:string;
    address:string;
    contactInfo?:string
 }



 const student1:student={
    name:'Nazmul',
    age:44,
    gender:'male',
    contactInfo:'900303',
    address:'ctg'
 }


 const student2:student  = {
    name:'Nazmul Hasan',
    age:34,
    gender:'male',
    address:'dhaka',
 }


  type userName= string;
  type isAdmin=boolean;
  const userName:userName='shadin'

 const isAdmin:isAdmin=true

 
  type Add=(num1:number,num2:number)=>number

  const add:Add = (num1,num2)=>num1 +num2







}