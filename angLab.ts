function sayHello(person:string):string {
    return "Hello, " + person;
}

var user = "Super Employee";

document.getElementById("div1").innerHTML = sayHello(user);

interface EmployeeOptions {
    // interface variables and types
    FirstName:string;
    LastName:string;
    // optional variables
    Age?:number;
    PhoneNumber?:number;
    State?:string;
    ZipCode?:number;
    Occupation?:string;
    HourlyWage?:number;
}

class Employee implements EmployeeOptions {
    // variables and types
    FirstName:string;
    LastName:string;
    Age:number;
    PhoneNumber:number;
    State:string;
    ZipCode:number;
    Occupation:string;
    HourlyWage:number;
    Certifications:string[] = [];
    // constructor
    constructor(firstName:string, lastName:string, age?:number, phoneNumber?:number, state?:string, zipCode?:number, occupation?:string, hourlyWage?:number) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.PhoneNumber = phoneNumber;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
        this.HourlyWage = hourlyWage;
    }
    // getters
    getFirstName():string {
        return this.FirstName;
    }
    getLastName():string {
        return this.LastName;
    }
    getAge():number {
        return this.Age;
    }
    getPhoneNumber():number {
        return this.PhoneNumber;
    }
    getState():string {
        return this.State;
    }
    getZipCode():number {
        return this.ZipCode;
    }
    getOccupation():string {
        return this.Occupation;
    }
    getHourlyWage():number {
        return this.HourlyWage;
    }
    // setters
    setFirstName(firstName:string):void {
        this.FirstName = firstName;
    }
    setLastName(lastName:string):void {
        this.LastName = lastName;
    }
    setAge(age:number):void {
        this.Age = age;
    }
    setPhoneNumber(phoneNumber:number):void {
        this.PhoneNumber = phoneNumber;
    }
    setState(state:string):void {
        this.State = state;
    }
    setZipCode(zipCode:number):void {
        this.ZipCode = zipCode;
    }
    setOccupation(occupation:string):void {
        this.Occupation = occupation;
    }
    setHourlyWage(hourlyWage:number):void {
        this.HourlyWage = hourlyWage;
    }
    // methods
    fullName():string {
        return this.FirstName + " " + this.LastName;
    }

    nameAndNumber():any {
        return this.fullName() + " " + this.PhoneNumber;
    }

    location():any {
        return this.State + " " + this.ZipCode;
    }

    weeklyWage(hours:number):number {
        return this.HourlyWage * hours;
    }

    addCerts(...args:string[]):string {
        for(var i=0;i<args.length;i++) {
            this.Certifications[i] = args[i];
        }
        return this.fullName() + " Certifications: " + this.Certifications;
    }

    static createEmployee(option:EmployeeOptions):Employee {
        return new Employee(option.FirstName, option.LastName);
    }

}

var emp1 = new Employee("John", "Doe", 25, 8285689403, "North Carolina", 28679, "Developer", 25);
document.getElementById("div2").innerHTML = emp1.nameAndNumber() + " Location: " + emp1.location();

var emp2 = new Employee("Anna", "Smith", 20, 4930483948, "California", 24950, "Engineer", 30);
document.getElementById("div3").innerHTML = emp2.nameAndNumber() + " Weekly Wage: " + emp2.weeklyWage(40).toString();

var emp3 = new Employee("Kyle", "Sigmon", 30, 8693847284, "New York", 49275, "Teacher", 19);
document.getElementById("div4").innerHTML = emp3.addCerts("CSM", "CDMA", "MBA");

var emp4 = Employee.createEmployee({FirstName:"Keng", LastName:"Moua"});
document.getElementById("div5").innerHTML = emp4.fullName();
