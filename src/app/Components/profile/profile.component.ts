import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/Classes/Employee';
import { Department } from 'src/app/Models/Enums/EnumDepartment';
import { Designation } from 'src/app/Models/Enums/EnumDesignation';
import { Gender } from 'src/app/Models/Enums/EnumGender';
import { EmployeeManagementService } from 'src/app/Services/employee-management.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  emp: Employee;
  isProfileEditable=false;
  genders = Gender;
  designations = Designation;
  departments = Department;

  myForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private employeeManagementService: EmployeeManagementService,
    ) {
    let empString = this.route.snapshot.paramMap.get('emp');
    if (empString != null) {
      this.emp = JSON.parse(empString);
    }else{
      this.emp=new Employee();
    }

    this.myForm = new FormGroup({
      id: new FormControl(this.emp.id),
      name: new FormControl(this.emp.name),
      email: new FormControl(this.emp.email),
      phone: new FormControl(this.emp.phone),
      salary: new FormControl(this.emp.salary),
      gender: new FormControl(this.emp.gender),
      designation: new FormControl(this.emp.designation),
      department: new FormControl(this.emp.department),
      address: new FormControl(this.emp.address),
    });
  }
  ngOnInit() {
  }

  editProfileHandler(){
    this.isProfileEditable=!this.isProfileEditable
  }

  updateProfileHandler(){
    console.log(this.myForm);
    let updateEmployeeRequest = new Employee();
    
    updateEmployeeRequest.setEmployeeValues(
      this.myForm.controls.id.value,
      this.myForm.controls.name.value,
      this.myForm.controls.email.value,
      this.myForm.controls.gender.value,
      this.myForm.controls.departments.value,
      this.myForm.controls.phone.value,
      this.myForm.controls.salary.value,
      this.myForm.controls.designation.value,
      this.myForm.controls.department.value
    );
    
    this.employeeManagementService.updateEmployee(updateEmployeeRequest);
  }

}
