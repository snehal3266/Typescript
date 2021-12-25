class Person {
    name:string;
    constructor(name:string) {
    this.name = name;
    }
    }


    class Teacher extends Person {
        display():void {
        console.log("Name: "+this.name);
        }
    }


    class Student extends Person {
    display():void {
    console.log("Name: "+this.name);
    }
    }
    
    var t = new Teacher("Vishal");
    t.display();
    
    var s = new Student("Jai");
    s.display();

  