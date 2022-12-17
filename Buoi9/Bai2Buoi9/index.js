const object = {
    name: "Thảo",
    age: 19,
    email: "thanhthao854@gamil.com"
}
function run(object){
    for (const key in object) {
        console.log(key + ":" + object[key]);
    }
}
run(object)

