{

// nullable types | unknow type


const searchName=(value:string | null)=>{
     if (value) {
        console.log('search ing');

     }
     else{
        console.log('there is nothing to search');
        
     }
}
searchName(null)

// unknown type

const getSpeedInMeterSecond=(value:unknown)=>{
    if (typeof value=='number') {
        const convertedSpeed =(value*1000)/3600
        console.log(`the speed is ${convertedSpeed} ms`);
        
    }
    if(typeof value=='string'){
        const [result,unit]= value.split(' ')
        console.log(result);
        
    }
}

getSpeedInMeterSecond('1000 kmh')














}