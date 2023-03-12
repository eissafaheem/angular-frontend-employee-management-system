import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/Classes/Employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  emp:any;
  constructor(private route: ActivatedRoute) {
    let empString = this.route.snapshot.paramMap.get('emp');

    if(empString!=null){
      this.emp = JSON.parse(empString);
    }
  }
  ngOnInit() {
  }

}
