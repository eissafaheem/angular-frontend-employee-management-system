import { Department } from "../Enums/EnumDepartment";
import { EmployeeDesignation } from "../Enums/EnumEmployeeDesignation";
import { Gender } from "../Enums/EnumGender";

export class Employee {
    id: number;
    name: string;
    email: string;
    gender: Gender;
    phone: string;
    salary: number
    designation: EmployeeDesignation;
    department: Department;

    constructor(id: number, name: string, email: string, gender: Gender, phone: string, salary:number, designation: EmployeeDesignation, department: Department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.salary = salary;
        this.designation = designation;
        this.department = department;
    }
}