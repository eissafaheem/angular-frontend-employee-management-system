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
import { EmployeeManagementService } from './Services/employee-management.service';
import { EmployeeBackendClient } from './Rest/BackendClient/EmployeeBackendClient';
import { RestCalls } from './Rest/RestOperations/RestCalls';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToasterService } from './Services/toaster.service';
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
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [EmployeeBackendClient, EmployeeManagementService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
