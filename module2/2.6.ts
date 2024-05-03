{
    
    // constraints

    const addCourseToStudent=<T extends {name:string;email:string;id:number} >(student:T)=>{
        const course='Next level course '
        return {
            ...student,
            course
        }
     }

     const student3=addCourseToStudent({emni:'emni'})
    
     const student1= addCourseToStudent<{
        id:3
        name: string;
        email: string;
        devType: string;
        bani:string
    }> ({id:3,name:'shadin',email:'shadin@gmail.com',devType:'NLWD',bani:'baini'})
    
     const student2= addCourseToStudent({name:'shadin',email:'shadin@gmail.com',devType:'NLWD',watch:'ho'})
    
    
    
    
    




































}