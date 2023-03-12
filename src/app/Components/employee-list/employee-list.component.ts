import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Classes/Employee';
import { Department } from 'src/app/Models/Enums/EnumDepartment';
import { Designation } from 'src/app/Models/Enums/EnumDesignation';
import { Gender } from 'src/app/Models/Enums/EnumGender';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = []
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.employees.push(new Employee("334", "Eissa Faheem", "e@h.com", Gender.Male, "53454543", 46200, Designation.SeniorManager, Department.Engineering));
    }
  }

  ngOnInit(): void {
  }

  getStringifiedEmp(emp: Employee) {
    return JSON.stringify(emp);
  }

}
