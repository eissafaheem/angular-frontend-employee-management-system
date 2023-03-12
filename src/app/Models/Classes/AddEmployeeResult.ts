import { Result } from "./Result";

export class AddEmployeeResult extends Result{
    constructor(error_code:number, error_message:string,response:any){
        super();
    }
}