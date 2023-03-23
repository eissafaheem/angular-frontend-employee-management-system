import { Employee } from "./Employee";
import { Result } from "./Result";

export class DeleteEmployeeResult extends Result{
    response: Employee[];
    constructor(){
        super();
        this.response=[];
    }
}