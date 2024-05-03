{

// ternary operator || optional chaining || nullish coalescing operator


const age:number=15;


const isAdult= age>=18 ?"adult" : "not adult";
console.log(isAdult);

// nullish coalescing operator
// i f i need make decision based on null undefiend


 
const isAuthenticated= undefined;

const result1= isAuthenticated ?? 'Guest'
const result2= isAuthenticated? isAuthenticated :'guest'
console.log({result1});

type User={
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        permanentaddress?: string

    }
}

const user:User= {
    name:'shadin',
    address:{
        city:'dhaka',
        road:'adjfd',
        presentAddress:'ctg town',

    }
}


const permanentAddress= user?.address?.permanentaddress??'No permanent address '
console.log(permanentAddress);











}