let arrA = [ 1, 7, 4, 2, 3, 1, 2, 2, 9, 3 ];
let mySet = new Set(arrA);      //xoa
let arr = Array.from(mySet);    //chuyen lại thanh array
arr.sort((a, b) => b - a);     //ham sap xep 

// function compareNumber(arr,b){
//     return  b-arr;
// }
// console.log(arr.sort(compareNumber));
console.log(arr);


