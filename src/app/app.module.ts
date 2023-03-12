import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
