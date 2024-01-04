//  write pgm to print 1 to 10
for (let i = 0; i<10; i++) {
    console.log(i+1)
    
}
// for (let i = 1; i<=10; i++) {
//     console.log(i)
    
// }

// create an array with 5 elements and print all the elements in the array
let arr_1 = ["a","b","c","d","e"]
for(let i= 0; i < arr_1.length; i++){
    console.log(arr_1[i])
}
// for of loop- of used in array
for(x of arr_1){
    console.log(x);
}

// for in loop- 
let person={name:'malu',age:21,place:'pta'}
for(x in person){
    console.log(x); // only print key
    console.log(person[x]);
}
// while loop
let j=0
while(j<10){
    console.log(j+1);
    j++;
}

arr_2= ["h","e","l","l","o"]
let i = 0
while(i<arr_2.length)
{
    console.log(arr_2[i]);
    i++;
}
// do while
let d = 1
do{
    console.log(d);
    d++;
}while(d<=10);