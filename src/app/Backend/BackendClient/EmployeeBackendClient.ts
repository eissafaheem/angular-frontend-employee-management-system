import { AddEmployeeResult } from "src/app/Models/Classes/AddEmployeeResult";
import { AllEmployeeResult } from "src/app/Models/Classes/AllEmployeeResult";
import { DeleteEmployeeResult } from "src/app/Models/Classes/DeleteEmployeeResult";
import { Employee } from "src/app/Models/Classes/Employee";
import { Result } from "src/app/Models/Classes/Result";
import { UpdateEmployeeResult } from "src/app/Models/Classes/UpdateEmployeeResult";
import { environment } from "src/environments/environment";
import { RestCalls } from "../RestOperations/RestCalls";

export class EmployeeBackendClient {

    restCalls: RestCalls;
    constructor() {
        this.restCalls = new RestCalls()
    }
    
    public async addEmployee(newEmployee: Employee): Promise<AddEmployeeResult> {
        let addEmployeeResult = new AddEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/employee";
        let completeUrl = baseUrl + relativeUrl;

        let body = newEmployee;

        let restResult = await this.restCalls.PUT(completeUrl, body);

        if (restResult.errorCode != 0) {
            addEmployeeResult.errorCode = 1;
            addEmployeeResult.errorMessage = restResult.errorMessage;
            return addEmployeeResult;
        }
        else {
            addEmployeeResult.errorCode = 0;
            addEmployeeResult.errorMessage = restResult.errorMessage;
            addEmployeeResult.response=restResult.response
            return addEmployeeResult;
        }
    }

    public async getAllEmployees(): Promise<AllEmployeeResult> {
        let allEmployeeResult = new AllEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/all/employee";
        let completeUrl = baseUrl + relativeUrl;
        
        let restResult = await this.restCalls.GET(completeUrl);
        console.log(restResult);
        
        if (restResult.errorCode != 0) {
            allEmployeeResult.errorCode = 1;
            allEmployeeResult.errorMessage = restResult.errorMessage;
            return allEmployeeResult;
        }
        else {
            allEmployeeResult.errorCode = 0;
            allEmployeeResult.errorMessage = restResult.errorMessage;
            allEmployeeResult.response=restResult.response;
            return allEmployeeResult;
        }
    }

    public async deleteEmployeeById(empId: String): Promise<DeleteEmployeeResult> {
        let deleteEmployeeResult = new DeleteEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/employee/"+empId;
        let completeUrl = baseUrl + relativeUrl;
        let body = "";
        let restResult = await this.restCalls.DELETE(completeUrl, body);
        console.log(restResult);
        
        if (restResult.errorCode != 0) {
            deleteEmployeeResult.errorCode = 1;
            deleteEmployeeResult.errorMessage = restResult.error_message;
            deleteEmployeeResult.response=restResult;
            return deleteEmployeeResult;
        }
        else {
            deleteEmployeeResult.errorCode = 0;
            deleteEmployeeResult.errorMessage = restResult.errorMessage;
            deleteEmployeeResult.response=restResult.response;
            return deleteEmployeeResult;
        }
    }

    public async updateEmployee(updateEmployeeRequest: Employee): Promise<UpdateEmployeeResult> {
        let updateEmployeeResult = new UpdateEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/employee";
        let completeUrl = baseUrl + relativeUrl;
        let body = updateEmployeeRequest;
        let restResult = await this.restCalls.POST(completeUrl, body);
        console.log(restResult);
        
        if (restResult.errorCode != 0) {
            updateEmployeeResult.errorCode = 1;
            updateEmployeeResult.errorMessage = restResult.errorMessage;
            return updateEmployeeResult;
        }
        else {
            updateEmployeeResult.errorCode = 0;
            updateEmployeeResult.errorMessage = restResult.errorMessage;
            updateEmployeeResult.response=restResult.response;
            return updateEmployeeResult;
        }
    }
}