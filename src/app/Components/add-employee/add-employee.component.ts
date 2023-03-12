import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Models/Classes/Employee';
import { Department } from 'src/app/Models/Enums/EnumDepartment';
import { Designation } from 'src/app/Models/Enums/EnumDesignation';
import { Gender } from 'src/app/Models/Enums/EnumGender';

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
  
  constructor() { 
  }
  

  onSubmit() {
    const formValue = this.myForm.value;
    let newEmployee = new Employee(formValue.id,formValue.name,formValue.email,formValue.gender, formValue.phone,formValue.salary,formValue.designation,formValue.department)
    console.log(newEmployee);
    
  }
  
}
