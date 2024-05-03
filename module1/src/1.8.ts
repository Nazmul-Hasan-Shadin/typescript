// destructuring

    const userInfo= {
    id:433,
    name: {
    firstName:'Nazmul Hasan',
    middleName:'Abedin',
    lastName:'Persian',

    },
    contactNo:'02993893',
    }

 const {contactNo,name:{middleName:midName}}= userInfo

//  array destructuring


const myFriends=['shadin','nazmul','hasan']

const [a,b,bestFriend]=myFriends