//TypeScript Number Object 

var num: number;

function Test(num: number): void {
    console.log(num);
}
Test(500);

//TypeScript String Object

var str: string = "Sneha";

function Test1(str: string): void {
    console.log(str);
}
Test1(str);

//TypeScript Boolean Object

function Test2(bVar: Boolean): void {
    
    console.log(bVar.valueOf());
}
var A = new Boolean(true);
var B= new Boolean(false);
var C: boolean = true;
Test2(A);
Test2(B);
Test2(C);


//TypeScript Date Object

function Test3(date:Date):void{
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    console.log("Current Time: "+hours+":"+minutes+":"+seconds); 
  }
  var date=new Date();
  Test3(date);


  //TypeScript Math Object

  function Test4(num:number):void{
    var squarRoot = Math.sqrt(num);
    console.log("Random Number:  " + num); 
    console.log("Square root:  " + squarRoot); 
  }
  var num:number = Math.random();
  Test4(num);

  //TypeScript Array Object

  function Test5(names:string[]):void{
    for (var i=0;i<names.length;i++){ 

      console.log(names[i]); 
    }
  }
  var names= ["Bharat","Sahdev","Richi","Harish","Bharti","Deepika","Shaveta"];
  Test5(names);
  