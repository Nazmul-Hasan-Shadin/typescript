{
//  type assertion

let anything:any;
anything='next';
anything=222;

//  (anything as number).toExponential


 const kgToGm =(value:string | number):string | number | undefined=>{
    if (typeof value== 'string') {
        const convertedvalue= parseFloat(value)
        return `the vonverted value is  ${convertedvalue}`
    }
    if(typeof value=='number'){
        return value *1000
    }
 }

const result1 =kgToGm(1000) as number

const result2= kgToGm('1000') as string


type CustomError={
    message:string
}

 try{
 
 }

 catch(error){
  console.log((error as CustomError).message);
  
 }
 







}