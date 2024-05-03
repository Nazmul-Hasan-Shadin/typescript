{ 
    // function with generics
    

  const createArray=(param:string):string[]=>{

    return [param]
  }

 




const createArrayWithTuple=<T,Q>(param:T,param2:Q):[T,Q]=>{

    return [param,param2]
  }


const res1= createArrayWithTuple<string,number>('Bangladesh',3)
const res2= createArrayWithTuple<string,{name:string}>('Bangladesh',{name:'asina'})

const resGeneric=createArrayWithGeneric<string>('bd')

const resGenericObj= createArrayWithGeneric<{name:string;age:number}>({name :'shadin',age:344})




 const addCourseToStudent=<T>(student:T)=>{
    const course='Next level course '
    return {
        ...student,
        course
    }
 }

 const student1= addCourseToStudent({name:'shadin',email:'shadin@gmail.com',devType:'NLWD'})

 const student2= addCourseToStudent({name:'shadin',email:'shadin@gmail.com',devType:'NLWD',watch:'ho'})











     
}