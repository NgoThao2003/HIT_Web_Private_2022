//tạo hàm
// function showDialog() {
//     //code;
//     alert('Hi xin chao');
// }

// showDialog();




/*goi ham
function writelog(message){
    console.log(message);  //tham so
    console.log(typeof message);// nhin tinh chat cua doi so truyen vao
    console.log('=====');
}
writelog('Test message');//doi so
writelog(123);
writelog(['js','PHP']);
*/



/*doi tuong arguments
su dung khi can dinh nghia nhieu bien
chi su dung trong ham
function writelog() {
    console.log(arguments);
}
writelog('Log1', 'Log2', 'Log3','Log4')
*/

//for of
// function writelog() {
//     var myString = ' ';
//     for(var param of arguments){ //arguments la array, lay gia tri array gan cho bien param chay
//         myString += `${param} - ` //in ra gia tri param moi param cach nhau dau -
//     } 
//     console.log(myString);
// }
// writelog('Log1', 'Log2', 'Log3','Log4')

// function showMassage() {
    
// }


// //expression function
// var showMassage2 = function() {

// }


//Array methods
//map()


var courses = [
    {
    id: 1,
    name: 'Khoa hoc: lam giau',
    coin: 0,

    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1,
    },
    {
        id: 3,
        name: 'KAKA',
        coin: 1,
    },
    {
        id: 4,
        name: 'llllllll',
        coin: 1,
    }
]
function courseHandler(courses, index, originArray){
    //return 123; //return lai gi thi new nhan cai do
    return{
        id: courses.id,
        name:  ` ${courses.name} `,
        coin: courses.coin,
        coinText: `Gia: ${courses.coin}`,
        index: index,
    }
}
var newCourses = courses.map(courseHandler)    //map return ve mang moi newCourses so luong gia tri bang so gia tri tren
//console.log(courses);
console.log(newCourses);