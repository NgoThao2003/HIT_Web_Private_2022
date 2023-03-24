let arrA = [ 1, 7, 4, 2, 3 ];
let arrB = [ 5, 2, 6, 3, 1 ];
arrA.sort((a, b) => (a - b));  //sap xep
let arrC = [];
for( let i = 0; i < arrA.length; i++ ){
    for( let j = 0; j < arrB.length; j++ ){
        if( arrA[i] === arrB[j] ){ 
            arrC.push( arrA[i] );
            arrA.splice(i,1);
            arrB.splice(i,1);
            --i;
            --j;
            break;
        }
    }
}
console.log(arrC);
