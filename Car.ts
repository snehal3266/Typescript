class Car{
    private type:String;
    private model:String;
    private color:String;
    

    get():void{
        this.type = "ciaz";
        this.model = "2013";
        this.color = "gray";
    }

    display():void{
        console.log("type:"+this.type);
        console.log("model:"+this.model);
        console.log("color:"+this.color);
    }
}

let c = new Car();
c.get();
c.display();