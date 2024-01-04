// print command
console.log('hai');

// variables
a=10;         //non-declared variables
console.log(a);
console.log('print var')
var a=16;       //variable declaration global declaration
console.log(a);
{
    var a=20;
    console.log(a)
}
console.log(a);

// 'let' is used to declare a variable
console.log('print let')
let b=30
console.log(b)
{
    let b=23
    console.log(b)
}
console.log(b)

console.log('print const')
const c=4
console.log(c)
{
    const c=6
    console.log(c)
}
console.log(c)
// Primitive Datatype
//number
console.log(typeof(c))
//string
let firstname="hai"
console.log(typeof(firstname))
//boolean
let isAvailable=true;
console.log(typeof(isAvailable))
// undefined-dont assign to the variable
var t;
console.log(typeof(t));
// number
var str=0;
console.log(typeof(str))
// string
var str='';
console.log(typeof(str))

// Array-different type of data can store
let arr1=[1,2,3,4,5]
console.log(typeof(arr1))  //object
console.log(arr1[3]) 

//JS Objects
let person={
    name:'malu',
    age:24

}
console.log(person.name)

// use new keyword in JS
let car=new Object();
car.brand="Hundai";
car.model='i10';
console.log(car);

var arr_obj=[{name:'abc',age:12},{name:'sfd',age:27}]
console.log(arr_obj[0].age)

// Operators
let num=7
console.log("number",num+3)

// postfix Increment
let n=6
let m=n++
console.log(m)  //6
console.log(n)  //7
// prefix 
let x=6
let y=++x
console.log(x) //7
console.log(y)  //7
// Conditional statement
if (x===y) {
    console.log("values are equal")
    
} else {
    console.log("values are not equal")
}
// when use 2= check only value, but 3= check both value and datatype

// q1
let x1=26
let x2=15
if(x1>x2)
{
    console.log("x1 is greater")
}
else if(x1==x2)
{
    console.log("both are same")
}
else{
    console.log("x2 is grater")
}

// Logical opearator
if((x1==x2) && (x1=9))
{
    console.log("equal")
}
else{
    console.log("not equal")
}

// Function
function addValu(add1, add2)
{
    var sum= add1+add2
    return sum
}
var result = addValu(2,3) //Function call
console.log("The sum is "+result)

function subValu(sub1, sub2)
{
    var sub=sub1-sub2
    return sub
}
var value=subValu(10,5)
console.log("The substraction is "+value)

function mulValu(mul1, mul2)
{
    var mul=mul1*mul2
    return mul
}
var abc=mulValu(5,2)
console.log("The multiplication is "+abc)

function divValu(div1, div2)
{
    var div=div1/div2
    return div
}
var xyz=divValu(8,4)
console.log("The division is "+xyz)

let j=9;
let j1=++j;
console.log(j)
console.log(j1)
