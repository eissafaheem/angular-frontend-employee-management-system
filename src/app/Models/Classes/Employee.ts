import { Department } from "../Enums/EnumDepartment";
import { Designation } from "../Enums/EnumDesignation";
import { Gender } from "../Enums/EnumGender";

export class Employee {
    id: string;
    name: string;
    email: string;
    phone: string;
    gender: Gender;
    salary: number
    designation: Designation;
    department: Department;

    constructor(id: string, name: string, email: string, gender: Gender, phone: string, salary:number, designation: Designation, department: Department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.salary = salary;
        this.designation = designation;
        this.department = department;
    }
}