let courses = ['C++', 'Java', 'Javasript'];

 function addcourses(a,b) {
    a.push(b);
 }
 //them mot phan tu
addcourses (courses,'Go')
console.log(courses);

//lay ra phan tu dau tien
function getFirstElement (x) {
    return x[0];
}
let firstElement = getFirstElement(courses);
console.log(firstElement)

//noi chuoi
function joinArr(arr,y) {
    return arr.join(y);
}
let result1 = joinArr(courses, ", ");
let result2 = joinArr(courses, " * ");
console.log(result1);
console.log(result2);

