import { Department } from "../Enums/EnumDepartment";
import { Designation } from "../Enums/EnumDesignation";
import { Gender } from "../Enums/EnumGender";

export class Employee {
    id: string;
    name: string;
    email: string;
    phone: string;
    gender: Gender;
    salary: number;
    designation: Designation;
    department: Department;
    address : string 

    constructor() {
        this.id = "";
        this.name = "";
        this.email = "";
        this.phone = "";
        this.gender = Gender.Not_Specified;
        this.salary = -1;
        this.designation = Designation.Not_Specified;
        this.department = Department.Not_Specified;
        this.address = "";
    }

    setEmployeeValues(id: string, name: string, email: string, gender: Gender, phone: string, salary: number, designation: Designation, department: Department, address: string ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.salary = salary;
        this.designation = designation;
        this.department = department;
        this.address = address;
    }
}