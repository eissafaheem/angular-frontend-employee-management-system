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
        let relativeUrl = "/course";
        let completeUrl = baseUrl + relativeUrl;

        let body = {
            id: Number(newEmployee.id),
            cname: newEmployee.name
        }

        let restResult = await this.restCalls.PUT(completeUrl, body);

        if (restResult.error_code != 0) {
            addEmployeeResult.error_code = 1;
            addEmployeeResult.error_message = restResult.error_message;
            addEmployeeResult.response=restResult
            return addEmployeeResult;
        }
        else {
            addEmployeeResult.error_code = 0;
            addEmployeeResult.error_message = restResult.error_message;
            addEmployeeResult.response=restResult
            return addEmployeeResult;
        }
    }

    public async getAllEmployees(): Promise<AllEmployeeResult> {
        let allEmployeeResult = new AllEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/courses";
        let completeUrl = baseUrl + relativeUrl;
        
        let restResult = await this.restCalls.GET(completeUrl);
        console.log(restResult);
        
        if (restResult.error_code != 0) {
            allEmployeeResult.error_code = 1;
            allEmployeeResult.error_message = restResult.error_message;
            allEmployeeResult.response=restResult;
            return allEmployeeResult;
        }
        else {
            allEmployeeResult.error_code = 0;
            allEmployeeResult.error_message = restResult.error_message;
            allEmployeeResult.response=restResult;
            return allEmployeeResult;
        }
    }

    public async deleteEmployeeById(empId: String): Promise<DeleteEmployeeResult> {
        let deleteEmployeeResult = new DeleteEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/course/delete/"+empId;
        let completeUrl = baseUrl + relativeUrl;
        
        let restResult = await this.restCalls.DELETE(completeUrl, empId);
        console.log(restResult);
        
        if (restResult.error_code != 0) {
            deleteEmployeeResult.error_code = 1;
            deleteEmployeeResult.error_message = restResult.error_message;
            deleteEmployeeResult.response=restResult;
            return deleteEmployeeResult;
        }
        else {
            deleteEmployeeResult.error_code = 0;
            deleteEmployeeResult.error_message = restResult.error_message;
            deleteEmployeeResult.response=restResult;
            return deleteEmployeeResult;
        }
    }

    public async updateEmployee(updateEmployeeRequest: Employee): Promise<UpdateEmployeeResult> {
        let updateEmployeeResult = new UpdateEmployeeResult();
        let baseUrl = environment.baseUrl;
        let relativeUrl = "/course/update"+updateEmployeeRequest.id;
        let completeUrl = baseUrl + relativeUrl;
        
        let restResult = await this.restCalls.POST(completeUrl, updateEmployeeRequest);
        console.log(restResult);
        
        if (restResult.error_code != 0) {
            updateEmployeeResult.error_code = 1;
            updateEmployeeResult.error_message = restResult.error_message;
            updateEmployeeResult.response=restResult;
            return updateEmployeeResult;
        }
        else {
            updateEmployeeResult.error_code = 0;
            updateEmployeeResult.error_message = restResult.error_message;
            updateEmployeeResult.response=restResult;
            return updateEmployeeResult;
        }
    }
}