async function Cau5() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let result = await res.json();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
Cau5();
