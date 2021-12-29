class Parent{
    name:string;

    constructor(name) {
        this.name = name;
    }
    showparent():void{
        console.log(this.name);
    }
}

class Child extends Parent
{
    mobileno: string;

    constructor(name, mobileno){
        super(name);
        this.mobileno = mobileno;
    }

    showchild(): void{
        this.showparent();
        console.log(this.mobileno);
    }
}

let c = new Child("Abhijit", "94545454");
c.showchild();

let c1 = new Child("Akash", "94545454343");
c1.showchild();