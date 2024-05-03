
{

// union types 

//  type FrontendDeveloper= 'fakibazDeveloper' | 'junior Developer'
//  type FullStaclDeveloper=  'fronrend '|'fakibazDeveloper' | 'junior Developer'

//  type Developer= FrontendDeveloper | FullStaclDeveloper

//  const newDeveloper:FrontendDeveloper='fakibazDeveloper'

//  type User={
//     name:string;
//     email:string;
//     gender:"male" | 'female';
//     bloodGroup:"O +" | "AB +"
//  }



//  const user1:User={
//     name:'persian',
//     email:'shad',
//     gender:'female',
//     bloodGroup:'O +'
//  }




 type FrontendDeveloper={
    skills: string[];
    designation1:'Frontend Developer',

 }


 type BackendDeveloper={
    skills: string[];
    designation2:'Backend Developer',
    
 }


 type FullStaclDeveloper= FrontendDeveloper & BackendDeveloper

const fullStackDeveloper:FullStaclDeveloper={
    skills:['html','css'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
}

















}