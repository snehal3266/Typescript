
class Car{
    private type:String;
    private model:String;
    private color:String;
   

    constructor(t:string, m:string, c:string){
        this.type = t;
        this.model = m;
        this.color = c;
    }

    display():void{
        console.log("type:"+this.type);
        console.log("model:"+this.model);
        console.log("color:"+this.color);
    }
}

let c = new Car("Ciaz", "2021", "Gray");
c.display();
c = new Car("Hundai-Elantra", "2015", "White");
c.display();