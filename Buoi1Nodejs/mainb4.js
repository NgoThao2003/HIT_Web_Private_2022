
const user = {
    studentCode: '2020605518',
    password: '123',
    firstName: 'Hung',
    lastName: 'Truong',
    age: 17,
    faculty: 'information technology',
    role: ['admin', 'user'],
   };


//Obj constructor
   function User( studentCode, password, firstName, lastName, age, faculty, role ) {
        this.studentCode = studentCode;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.faculty = faculty;
        this.role = role;
    }
    let author = new User ( '2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user'] )
    console.log( author );


//class
    // class User {
    //     constructor( studentCode, password, firstName, lastName, age, faculty, role ) {
    //         this.studentCode = studentCode;
    //         this.password = password;
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //         this.faculty = faculty;
    //         this.role = role;
    //     }
    // }
    // let author2 = new User ( '2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user'] )
    // console.log( author2 );