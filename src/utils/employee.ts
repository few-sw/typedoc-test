export class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    private getSalaryPrivate(): number {
        return 1000
    }
    
    getSalary() : number {
        return 10000;
    }
}

class EmployeePrivate {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    private getSalaryPrivate(): number {
        return 1000
    }
    
    getSalary() : number {
        return 10000;
    }
}