{

// genereic interface


interface Developer <T>{
    name: string;
    computer:{
        brand:string;
        model:string;
        releasYear:number
    }
    smartWatch: T
}


const poorDeveloper:Developer<{
    brand:string;
    model:string;
     display:string
}>={
  name:'shadin',
  computer:{
    brand:'freez',
    model:'bal',
    releasYear:333
  },

  smartWatch:{
    brand:'emilab',
    model:'kw66',
    display:'emulate'
  }

}
 


const richDeveloper:Developer<{
    brand:string;
    model:string;
    heartTrack:true;
    sleepTrack:true
}>={
    name:'Rich dev',
    computer:{
      brand:'hoe',
      model:'x-e-3',
      releasYear:3303
    },
  
    smartWatch:{
      brand:'apple',
      model:'dkjf3',
      heartTrack:true, 
      sleepTrack:true
  
    }
  
  }














// 

    
}