import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AddEmployeeResult } from '../Models/Classes/AddEmployeeResult';
import { Employee } from '../Models/Classes/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor() { }

  // addEmployee(newEmployee:Employee):Observable<AddEmployeeResult>{
  //   return from();
  // }
}
