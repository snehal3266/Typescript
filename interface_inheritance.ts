interface BigBoss {
    age:number;
    name:string;
    }
    interface Winner extends BigBoss {
    id:number;
    }
    var king = <Winner>{};
    king.age = 24;
    king.name = "Vishal";
    king.id=1;
   
    console.log("Name: "+king.name);
    console.log("Age: "+king.age);
    console.log("id:"+king.id);
    