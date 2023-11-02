export class Employee {
    empCode: number;
    empName: string;
    boss: BossPrivate;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
            this.boss = new BossPrivate(code, name)
    }

    private getSalaryPrivate(): number {
        return 1000
    }
    
    getSalary() : number {
        return  this.getSalaryPrivate();
    }
}

class BossPrivate {
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
        return this.getSalaryPrivate();
    }
}