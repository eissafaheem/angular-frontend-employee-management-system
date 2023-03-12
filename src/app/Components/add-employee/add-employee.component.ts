import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Models/Classes/Employee';
import { Department } from 'src/app/Models/Enums/EnumDepartment';
import { Designation } from 'src/app/Models/Enums/EnumDesignation';
import { Gender } from 'src/app/Models/Enums/EnumGender';
import { EmployeeManagementService } from 'src/app/Services/employee-management.service';
import { ToasterService } from 'src/app/Services/toaster.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  genders = Gender;
  designations = Designation;
  departments = Department;

  myForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    salary: new FormControl(''),
    gender: new FormControl(''),
    designation: new FormControl(''),
    department: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private employeeManagementService: EmployeeManagementService,
    private toasterService: ToasterService
  ) {
  }

  onSubmit() {
    const formValue = this.myForm.value;
    let newEmployee = new Employee(formValue.id, formValue.name, formValue.email, formValue.gender, formValue.phone, formValue.salary, formValue.designation, formValue.department)
    this.toasterService.info("Info", "Adding employee please wait...");
    let addEmployeeResult = this.employeeManagementService.addEmployee(newEmployee);
    addEmployeeResult.subscribe((res: any) => {
      this.toasterService.success("Success", "Employee added successfully!");
    }, (err: any) => {
      this.toasterService.error("Failure", "Adding employee failed !");
    })
  }
}
