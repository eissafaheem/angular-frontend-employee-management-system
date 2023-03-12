import { AddEmployeeResult } from "src/app/Models/Classes/AddEmployeeResult";
import { Employee } from "src/app/Models/Classes/Employee";
import { Result } from "src/app/Models/Classes/Result";
import { environment } from "src/environments/environment";
import { RestCalls } from "../RestOperations/RestCalls";

export class EmployeeBackendClient {

    restCalls: RestCalls;
    constructor() {
        this.restCalls = new RestCalls()
    }
    
    public async addEmployee(newEmployee: Employee): Promise<AddEmployeeResult> {
        let result = new Result();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/course";
        let completeUrl = baseUrl + relativeUrl;

        let body = {
            id: Number(newEmployee.id),
            cname: newEmployee.name
        }

        let restResult = await this.restCalls.POST(completeUrl, body);

        if (restResult.error_code != 0) {
            result.error_code = 1;
            result.error_message = restResult.error_message;
            return result;
        }
        else {
            result.error_code = 0;
            result.error_message = restResult.error_message;
            return result;
        }
    }

    public async getAllEmployees(): Promise<AddEmployeeResult> {
        let result = new Result();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/courses";
        let completeUrl = baseUrl + relativeUrl;
        
        let restResult = await this.restCalls.GET(completeUrl);
        console.log(restResult);
        
        if (restResult.error_code != 0) {
            result.error_code = 1;
            result.error_message = restResult.error_message;
            result.response=restResult;
            return result;
        }
        else {
            result.error_code = 0;
            result.error_message = restResult.error_message;
            return result;
        }
    }

    public async deleteEmployeeById(empId: String): Promise<AddEmployeeResult> {
        let result = new Result();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/course/delete/"+empId;
        let completeUrl = baseUrl + relativeUrl;
        
        let restResult = await this.restCalls.DELETE(completeUrl, empId);
        console.log(restResult);
        
        if (restResult.error_code != 0) {
            result.error_code = 1;
            result.error_message = restResult.error_message;
            result.response=restResult;
            return result;
        }
        else {
            result.error_code = 0;
            result.error_message = restResult.error_message;
            return result;
        }
    }
}