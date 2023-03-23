import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/Classes/Employee';
import { Department } from 'src/app/Models/Enums/EnumDepartment';
import { Designation } from 'src/app/Models/Enums/EnumDesignation';
import { Gender } from 'src/app/Models/Enums/EnumGender';
import { EmployeeManagementService } from 'src/app/Services/employee-management.service';
import { ToasterService } from 'src/app/Services/toaster.service';

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
    private toasterService: ToasterService
    ) {
    let empString = this.route.snapshot.paramMap.get('emp');
    if (empString != null) {
      this.emp = JSON.parse(empString);
    }else{
      this.emp=new Employee();
    }

    this.myForm = new FormGroup({
      id: new FormControl(this.emp.id, Validators.required),
      name: new FormControl(this.emp.name,Validators.required),
      email: new FormControl(this.emp.email,Validators.required),
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
    this.toasterService.info("Info","Updating profile..")
    let updateEmployeeRequest = new Employee();
    
    updateEmployeeRequest.setEmployeeValues(
      this.myForm.controls.id.value,
      this.myForm.controls.name.value,
      this.myForm.controls.email.value,
      this.myForm.controls.gender.value,
      this.myForm.controls.phone.value,
      this.myForm.controls.salary.value,
      this.myForm.controls.designation.value,
      this.myForm.controls.department.value,
      this.myForm.controls.address.value
    );
    
    let updateEmployeeResult = this.employeeManagementService.updateEmployee(updateEmployeeRequest);
      updateEmployeeResult.subscribe((res:any)=>{
        this.toasterService.success("Success","Employee updated successfully!");
        this.emp=updateEmployeeRequest;
        this.isProfileEditable=false;
      },(err:any)=>{
        this.toasterService.error("Error",err.errorMessage);
        this.isProfileEditable=false;
      })
  }

  backButtonHandler(){
    this.isProfileEditable = !this.isProfileEditable;
  }

}
