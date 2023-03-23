import { Designation } from "../Enums/EnumDesignation";
import { Gender } from "../Enums/EnumGender";
import { Employee } from "./Employee";
import { Result } from "./Result";

export class AddEmployeeResult extends Result{
    
    response: Employee;
    constructor(){
        super();
        this.response = new Employee();
    }
}