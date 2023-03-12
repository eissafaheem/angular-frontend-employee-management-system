import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'profile/:emp', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
