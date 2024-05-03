{


// spread operator 
// rest operator
// destructureingg  

 

// learn spread operator

const bros1:string[]=['shadin','nazmul','hasan']
const bros2:string[]=['tonmyou','shabnor','rahat']

bros1.push(...bros2)

const mentors1={
    typescript:'Nazmul',
    redux:'Mir',
    dbms: 'Mizan',

}

const mentors2={
    prisma:'Firoz',
    next:'tanmoy',
    cloud:'Nahid',
}

const mentroList={
    ...mentors1,
    ...mentors2
}



// learn rest operatro 

const greetFriends=(...friends:string[])=>{
    // console.log(`hi ${friend1} ${friend2} ${friend3}  hi  baby`);
    friends.forEach((friend:string)=> console.log(`hi ${friend}`)
    )
}

greetFriends('abul','kabul','babul','ubul')



















}