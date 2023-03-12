import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Classes/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees:number[] = [1,2,5,8,3,1,1,1,1]
  constructor() { }

  ngOnInit(): void {
  }

}
