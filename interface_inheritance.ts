interface Person {
    age:number;
    name:string;
    }
    interface Student extends Person {
    id:number;
    }
    var king = <Student>{};
    king.age = 24;
    king.name = "Vishal";
    king.id=1;
   
    console.log("Name: "+king.name);
    console.log("Age: "+king.age);
    console.log("id:"+king.id);
    