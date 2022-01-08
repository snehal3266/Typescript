interface Construction{
   type:string,
    permission(): string,
    building() :void,
    completion():boolean;
    opening():void;    
}
class Bunglow implements Construction{
    type:string ;

    permission():string {
        return "xyz";
    }

    building(): void {
        
    }

    completion(): boolean {
        return (true);
    }
    
    opening(): void {
        
    }

}