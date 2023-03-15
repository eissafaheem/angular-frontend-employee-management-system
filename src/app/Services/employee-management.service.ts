import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AddEmployeeResult } from '../Models/Classes/AddEmployeeResult';
import { Employee } from '../Models/Classes/Employee';
import { EmployeeBackendClient } from '../Backend/BackendClient/EmployeeBackendClient';
import { AllEmployeeResult } from '../Models/Classes/AllEmployeeResult';
import { DeleteEmployeeResult } from '../Models/Classes/DeleteEmployeeResult';
import { UpdateEmployeeResult } from '../Models/Classes/UpdateEmployeeResult';
@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor(private employeeBackendClient: EmployeeBackendClient) { }

  public addEmployee(newEmployee: Employee): Observable<AddEmployeeResult> {
    return from(this.employeeBackendClient.addEmployee(newEmployee));
  }

  public getAllEmployees(): Observable<AllEmployeeResult> {
    return from(this.employeeBackendClient.getAllEmployees());
  }

  public deleteEmployeeById(empId: string): Observable<DeleteEmployeeResult> {
    return from(this.employeeBackendClient.deleteEmployeeById(empId));
  }

  public updateEmployee(updateEmployeeRequest: Employee): Observable<UpdateEmployeeResult> {
    return from(this.employeeBackendClient.updateEmployee(updateEmployeeRequest));
  }


}
