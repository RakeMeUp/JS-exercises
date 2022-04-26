class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    getSalary = ()=>{
        return this.salary
    }
    setSalary = (amount)=>{
        this.salary = amount
    }
    accept = (visitorFn)=>{
        visitorFn(this)
    }
}

//////////////////////////////////////6

const bob = new Employee("Bob", 123)
console.log(bob.getSalary());

function extraSalary(emp){
    emp.setSalary(emp.getSalary() * 2)
}

bob.accept(extraSalary);
console.log(bob.getSalary());
