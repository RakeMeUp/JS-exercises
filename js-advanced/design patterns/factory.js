class Developer{
    constructor(name){
        this.name = name
    }
    type = "Developer"
}
class Tester{
    constructor(name){
        this.name = name
    }
    type = "Tester"
}

class EmployeeFactory{
    create = (name, type) =>{
        switch(type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}

function say(){
    console.log("I'm " + this.name + " and I'm a " + this.type)
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("Jessica", 2))
employees.push(employeeFactory.create("Trad", 1))
employees.push(employeeFactory.create("Borld", 2 ))

employees.forEach(emp =>{
    say.call(emp);
})