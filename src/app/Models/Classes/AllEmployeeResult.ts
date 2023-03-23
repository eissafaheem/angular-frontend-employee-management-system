import { Employee } from "./Employee";
import { Result } from "./Result";

export class AllEmployeeResult extends Result {
    response: Employee[];
    constructor() {
        super();
        this.response = []
    }

}