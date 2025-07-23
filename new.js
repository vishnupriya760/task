// // function sumofdigits(num){
    
// //     let sum=0;
// //     while(num>0){
// //         sum+=num%10;
// //         num.math.floor(sum/10);
// //     }
// //     return sum;
// // }
// // console.log(sumofdigits(123));


//  1.// Write a function to find the length of the last word in a string.
//  function lengthlastword(str){
//     let length=0;
//     let i=str.length-1
//          while(i>=0 && str[i]==='')
//             i--;
//          while(i>=0 && str[i]!=='')
//             length++;
//             //  i--;
//          return length;
// }
//         console.log(lengthlastword("javascript is fun"));  
// // 2. Write a program to find the largest prime factor of a given number.
// function largestprime(n){
//     let fac=2
//     while(fac*fac<=n){
//         if(n%fac===0){
//             n=n/fac;
//         }else{
//             fac++;
//         }
//     }
//     return n;
// }
// console.log(largestprime(10));
// // 3.Implement a program to calculate the square root of a number.
// function squareroot(number){
//     if(number<0){
//         return"square root of neg number is not real"
//     }
//     return Math.sqrt(number)
// }
// console.log(squareroot(25));


// // .Implement a program to find the sum of all even numbers in an array.
    
// function sumEvenNumbers(numbers) {   
//     let sum=0;
//     for (let i=0;i<numbers.length; i++) {
//         if (numbers[i] % 2 === 0) { 
//             sum+= numbers[i];
//         } else {
            
//         }
//     }
//     return sum;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5]));


// // Create a program to sort elements in an array in ascending order.

// let numbers=[9,3,5,1,8];
// numbers.sort(function(a,b){
//     return a-b;
// })
// console.log(numbers);




// // Write a program to find the common elements between two arrays.
// let arr1=[1,2,3,4,5];
// let arr2=[3,4,5,6,7];
// let com=[];
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if (arr1[i]===arr2[j]){
//             com.push(arr1[i])
//             break;
//         }
//     }
// }
// console.log(com);



// function commonelements(ar1,ar2){
    
//     let comm=[]
//     for(let i=0;i<arr.length;i++){
//       if(ar2.includes(ar1[i])){
//         comm.push(ar1[i])
//       }
//     }if(comm.length===2);
//     return com;
// }

// let ar1=[1,2,3,4,5];
//     let ar2=[6,7,3,4,5];
// let nom=commonelements(ar1,ar2)



// let num1=[1,2,3,4]
// let num2=[3,4,5,6]
// let com=[]
// for(let i=0;i<num1.length;i++ ){
//     if(num2.includes(num1[i])){
//         com.push(num1[i])
//     }
//      if (com.length===2)break;
        
        
//     }
// console.log(com);







// Write a program to find the frequency of characters in a string.
console.log("hi");

function commonelements(ar1,ar2){
    
    let comm=[]
    for(let i=0;i<ar1.length;i++){
      if(ar2.includes(ar1[i])){
        comm.push(ar1[i])
      }
    if(comm.length===2)break;
    }
    return comm;
}

let ar1=[1,2,3,4,5];
    let ar2=[6,7,3,4,5];
let nom=commonelements(ar1,ar2)
console.log(nom);



// Create a program to sort elements in an array in ascending order.

let numbers=[9,3,5,1,8];
numbers.sort(function(a,b){
    return a-b;
})
console.log(numbers);



// 60. Write a program to find the frequency of characters in a string.
function charfrequency(str){
    let ab={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(ab[char]){
            ab[char]++;
        }else{
            ab[char]=1;
        }
    }
    return ab;
}
let result=charfrequency("hello")
console.log(result);


// Create a function to find the intersection of two arrays.

function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}


let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let commonElements = intersection(array1, array2);
console.log(commonElements)