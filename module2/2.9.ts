{

// conditional type


 type a1=number
 type b=undefined

 type x= a1 extends null ?true :false;
 type y = a1 extends null ? true : b extends undefined ? undefined:any


 type Sheikh={
    bike:string;
    car:string;
    ship:string
 }


//   car asea ki ? ship asea ki? track asea ki?

 type CheckVehicle <T>= T extends 'bike'|'car'|'ship'?true :false

 type HasBike= CheckVehicle<'ship'>



// 













}