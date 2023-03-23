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

    public addEmployee(newEmployee: Employee): Promise<AddEmployeeResult> {
        return new Promise(async (resolve, reject) => {
            try {
                let addEmployeeResult = new AddEmployeeResult();
                let baseUrl = environment.baseUrl;
                let relativeUrl = "/employee";
                let completeUrl = baseUrl + relativeUrl;

                let body = newEmployee;

                let restResult = await this.restCalls.PUT(completeUrl, body);

                if (restResult.errorCode == 0) {
                    addEmployeeResult.errorCode = 0;
                    addEmployeeResult.errorMessage = restResult.errorMessage;
                    addEmployeeResult.response = restResult.response
                    resolve(addEmployeeResult);
                }
                else if (restResult.errorCode == 409) {
                    addEmployeeResult.errorCode = 1;
                    addEmployeeResult.errorMessage = "Employee Id already exists.";
                    addEmployeeResult.response = restResult.response
                    reject(addEmployeeResult);
                }
                else {
                    addEmployeeResult.errorCode = 1;
                    addEmployeeResult.errorMessage = "Something went wrong.";
                    reject(addEmployeeResult);
                }
            }
            catch (err) {
                let addEmployeeResult = new AddEmployeeResult();
                addEmployeeResult.errorCode = 1;
                addEmployeeResult.errorMessage = "Something went wrong";
                reject(addEmployeeResult);
            }
        })
    }

    public async getAllEmployees(): Promise<AllEmployeeResult> {
        return new Promise(async (resolve, reject) => {

            try {
                let allEmployeeResult = new AllEmployeeResult();
                let baseUrl = environment.baseUrl;
                let relativeUrl = "/all/employee";
                let completeUrl = baseUrl + relativeUrl;

                let restResult = await this.restCalls.GET(completeUrl);

                if (restResult.errorCode == 0) {
                    allEmployeeResult.errorCode = 0;
                    allEmployeeResult.errorMessage = restResult.errorMessage;
                    allEmployeeResult.response = restResult.response;
                    resolve(allEmployeeResult);
                }
                else if (restResult.errorCode == 404) {
                    allEmployeeResult.errorCode = 0;
                    allEmployeeResult.errorMessage = "No employees present";
                    allEmployeeResult.response = [];
                    resolve(allEmployeeResult);
                }
                else {
                    allEmployeeResult.errorCode = 1;
                    allEmployeeResult.errorMessage = restResult.errorMessage;
                    reject(allEmployeeResult);
                }
            }
            catch (error) {
                let allEmployeeResult = new AllEmployeeResult();
                allEmployeeResult.errorCode = 1;
                allEmployeeResult.errorMessage = "Something went wrong";
                reject(allEmployeeResult);
            }
        })

    }

    public async deleteEmployeeById(empId: String): Promise<DeleteEmployeeResult> {
        return new Promise(async (resolve, reject) => {
            try {
                let deleteEmployeeResult = new DeleteEmployeeResult();
                let baseUrl = environment.baseUrl;
                let relativeUrl = "/employee/" + empId;
                let completeUrl = baseUrl + relativeUrl;
                let body = "";
                let restResult = await this.restCalls.DELETE(completeUrl, body);

                if (restResult.errorCode == 0) {
                    deleteEmployeeResult.errorCode = 0;
                    deleteEmployeeResult.errorMessage = restResult.errorMessage;
                    deleteEmployeeResult.response = restResult.response;
                    resolve(deleteEmployeeResult);
                }
                else {
                    deleteEmployeeResult.errorCode = 1;
                    deleteEmployeeResult.errorMessage = restResult.error_message;
                    deleteEmployeeResult.response = restResult.response;
                    reject(deleteEmployeeResult);
                }
            }
            catch (error) {
                let deleteEmployeeResult = new DeleteEmployeeResult();
                deleteEmployeeResult.errorCode = 0;
                deleteEmployeeResult.errorMessage = "Something went wrong";
                reject(deleteEmployeeResult);
            }
        })

    }

    public async updateEmployee(updateEmployeeRequest: Employee): Promise<UpdateEmployeeResult> {
        return new Promise(async (resolve, reject) => {
            try {
                let updateEmployeeResult = new UpdateEmployeeResult();
                let baseUrl = environment.baseUrl;
                let relativeUrl = "/employee";
                let completeUrl = baseUrl + relativeUrl;
                let body = updateEmployeeRequest;
                let restResult = await this.restCalls.POST(completeUrl, body);

                if (restResult.errorCode == 0) {
                    updateEmployeeResult.errorCode = 0;
                    updateEmployeeResult.errorMessage = restResult.errorMessage;
                    updateEmployeeResult.response = restResult.response;
                    resolve(updateEmployeeResult);
                }
                else if (restResult.errorCode == 404) {
                    updateEmployeeResult.errorCode = 1;
                    updateEmployeeResult.errorMessage = "Employee does not exists";
                    reject(updateEmployeeResult);
                }
                else {
                    updateEmployeeResult.errorCode = 1;
                    updateEmployeeResult.errorMessage = restResult.errorMessage;
                    reject(updateEmployeeResult);
                }
            }
            catch (error) {
                let updateEmployeeResult = new UpdateEmployeeResult();
                updateEmployeeResult.errorCode = 1;
                updateEmployeeResult.errorMessage = "Something went wrong";
                reject(updateEmployeeResult);
            }
        })
    }
}