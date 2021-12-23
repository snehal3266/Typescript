class Person{
    private name: string;
    private adharno: string;
    private mobileno: string;

    constructor(n:string, a:string, m:string)
    {
        this.name = n;
        this.adharno = a;
        this.mobileno = m;
    }

    get():void{
        this.name = "Khushboo";
        this.adharno = "343434343434";
        this.mobileno = "9545353232";
    }

    display():void{
        console.log("Name: " + this.name);
        console.log("Adhar No: " + this.adharno);
        console.log("Mobile No: " + this.mobileno);
    }
}

let p = new Person("A", "B", "C");
//p.get();
p.display();
