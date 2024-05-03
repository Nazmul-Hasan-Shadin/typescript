{
    // generic type


      type GenericArray<T>= Array<T>

    // const rollNumbers:number[]=[2,32,2];



    const rollNumbers:GenericArray<number>=[2,32,2];

    // const mentors:string[]=['Mir','fuxk','dfj','shadin']
    const mentors:GenericArray<string>=['Mir','fuxk','dfj','shadin']

    // const boolArray:boolean[]=[true,false]

    const boolArray:GenericArray<boolean>=[true,false]




    const user:GenericArray<{name:string,age:number}> =[
        {
            name:'Shadin',
            age:200
        }
        ,
        {
            name:'hasan',
            age:34
        }
    



    ]




// generic tuple
 
 
type GenericTuple <x,y>=[x ,y]


const manush:GenericTuple<string,string> = ['mr. x','mr y']

const userwithid:GenericTuple<number,{name:string,email:string}>  = [34959,{name:'shadin',email:'a@gmail.com'}]






























}