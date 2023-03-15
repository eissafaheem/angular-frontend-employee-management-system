import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Classes/Employee';
import { Department } from 'src/app/Models/Enums/EnumDepartment';
import { Designation } from 'src/app/Models/Enums/EnumDesignation';
import { Gender } from 'src/app/Models/Enums/EnumGender';
import { EmployeeManagementService } from 'src/app/Services/employee-management.service';
import { ToasterService } from 'src/app/Services/toaster.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = []
  constructor(
    private employeeManagementService: EmployeeManagementService,
    private toasterService: ToasterService
    ) {
    for (let i = 0; i < 20; i++) {
      let emp = new Employee();
      emp.setEmployeeValues("334", "Eissa Faheem", "e@h.com", Gender.Male, "53454543", 46200, Designation.SeniorManager, Department.Engineering, "Lucknow");
      this.employees.push(emp);
    }
  }

  ngOnInit(): void {
    this.toasterService.info("Info","Loading employee list...")
    let getEmployeeResult = this.employeeManagementService.getAllEmployees();
    getEmployeeResult.subscribe((res:any)=>{
      console.log(res);
      this.employees=res.response;
      this.toasterService.success("Success","Employees loaded successfully !")
      
    },(err:any)=>{
      this.toasterService.error("Error","Employee list loaded failed !")
      console.log(err);
    })
  }

  getStringifiedEmp(emp: Employee) {
    return JSON.stringify(emp);
  }

  deleteEmployeeHandler(empId:string){
    this.toasterService.info("Info","Deleting employee please wait...")
    let deleteEmpResult = this.employeeManagementService.deleteEmployeeById(empId);
    deleteEmpResult.subscribe((res:any)=>{
      this.toasterService.success("Success","Employee deleted successfully !")
      for(let i=0;i<this.employees.length;i++){
        if(this.employees[i].id==empId){
          this.employees.splice(i,1);
        }
      }
    },(err:any)=>{
      this.toasterService.error("Error","Employee deletion failed !")
    })
  }

}
