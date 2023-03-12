import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AddEmployeeResult } from '../Models/Classes/AddEmployeeResult';
import { Employee } from '../Models/Classes/Employee';
import { EmployeeBackendClient } from '../Rest/BackendClient/EmployeeBackendClient';
@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor(private employeeBackendClient: EmployeeBackendClient) { }

  public addEmployee(newEmployee: Employee): Observable<AddEmployeeResult> {
    return from(this.employeeBackendClient.addEmployee(newEmployee));
  }

  public getAllEmployees(): Observable<AddEmployeeResult> {
    return from(this.employeeBackendClient.getAllEmployees());
  }

  public deleteEmployeeById(empId: string): Observable<AddEmployeeResult> {
    return from(this.employeeBackendClient.deleteEmployeeById(empId));
  }


}
