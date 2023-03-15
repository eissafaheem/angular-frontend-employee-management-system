import { Employee } from "./Employee";
import { Result } from "./Result";

export class UpdateEmployeeResult extends Result {
    response: Employee;
    constructor() {
        super();
        this.response = new Employee();
    }
}