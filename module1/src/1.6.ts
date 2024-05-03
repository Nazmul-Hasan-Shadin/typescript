//learning function
//  normal function
// arrow function

function add (number1:number,number2:number=8):number{
    return number1 + number2
}

add(3,'2')

const addArrow = (num1:number,num2:number):number=> num1 + num2

// object ==> function ==> method

const poorUser= {
    name:'shadin',
    balance: 0,
    addBalance(balance:number):number{
      return this.balance + balance
    }
}



const arr: number[]=[2,34,3,24,3]

const newArray:number[]= arr.map((element:number):number=> element * element)