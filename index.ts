// data types

// let x : number = 10;
// console.log(x);

// let y : string = "hello Talha";
// console.log(y);




// Wrapper Object Type: Number , String , Boolean( Do not use it)

// let x: Number = new Number(10);
// console.log(x);



// Undefined 
// let x;
// console.log(x);
// ====> Undefined Output 

// Type Inference 

// let x : number = 10; //annotation
// console.log(x);
// x = "Talha";
// console.log(x);

// let x;
// x=10;
// console.log(x);
// x= "abc";
// console.log(x);
// x= true;
// console.log(x);

// let x: number;  // infer
// let x = 10;    // infer
// let x;    
// x = 10;
// console.log(x);
// x = "abc";
// console.log(x);
// x = false
// console.log(x);

// any types we can assign any type of data string boolean and number:
// let x:any = 0;    
// x = 10;
// console.log(x);
// x = "abc";
// console.log(x);
// x = false
// console.log(x);

// Note: Do not use any type in your code 

//=================================================

// Array  Lecture:

//Arrays(Single Type value in Array)
// let array: number[] = [1,2,3,4,5];
// console.log(array);

// let array2 : string[] = ["Danyal", "Ali", "Nabeel", "Shahjahan"];
// console.log(array2);

//Generic Syntex
// let array: Array<number> = [1,2,3,4,5];
// console.log(array);

// let array: Array<string> = ["Ali","Danyal","Nabeel","Ahmed"];
// console.log(array);


// Mix type value in Array:

//  Array Union Types:
// let arr3 : (string | number | boolean)[] = ["Talha", 1, true];
// arr3[3] = "Ali";
// arr3[4] = 90;
// console.log(arr3);

//********************************************************** */
// Arrays with fixed length and type (Tuple)
// **********************************************************/
// let arr4 : [string, number, boolean] = ["Talha", 1, true];
//  //arr4[3] = "Ali";   // it will generate the error if we add more elements in this array

// console.log(arr4);


//ReadOnly Arrays

// you can only read the array elements but can't write the array
// let array: readonly number[] = [1,2,3,4,5,6,];
// // array[6] = 10; // read only access
// // array.push(90);
// console.log(array);


// Type Inference
// let array = [1,2,3,4,5];
// array.push(10);
// console.log(array);

//Array methods and Type Safety 

// let array:  number[] = [1,2,3,4,5];
// // console.log(array);

// let ans = array.map(x => x <= 3 ? "Value: " +(x*2): x);
// console.log(ans);

// multi-dimentional
let matrix: number[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  
];
console.log(matrix);








