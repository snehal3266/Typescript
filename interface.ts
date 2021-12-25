interface Person {
    name:string;
      id:number;
      mobile_no:number;
     call: ()=>string;
    }
    var student:Person = {
        name:"Sneha",
        id:1,
        mobile_no:9876543265,
       call: ():string =>{return "student call"}
    }
    console.log("Student Object Details: ");
    console.log(student.call());
    console.log(student.name);
    console.log(student.id);
    console.log(student.mobile_no);


    var teacher:Person = {
    name:"Rutuja",
    id:2,
    mobile_no:9087564885,
    call: ():string =>{return "teacher call"}
    }
    console.log("Teacher Object Details: ");
    console.log(teacher.call());
    console.log(teacher.name);
    console.log(teacher.id);
    console.log(teacher.mobile_no);