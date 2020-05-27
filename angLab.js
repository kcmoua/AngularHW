function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Employee";
document.getElementById("div1").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    // constructor
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage) {
        this.Certifications = [];
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
    Employee.prototype.getFirstName = function () {
        return this.FirstName;
    };
    Employee.prototype.getLastName = function () {
        return this.LastName;
    };
    Employee.prototype.getAge = function () {
        return this.Age;
    };
    Employee.prototype.getPhoneNumber = function () {
        return this.PhoneNumber;
    };
    Employee.prototype.getState = function () {
        return this.State;
    };
    Employee.prototype.getZipCode = function () {
        return this.ZipCode;
    };
    Employee.prototype.getOccupation = function () {
        return this.Occupation;
    };
    Employee.prototype.getHourlyWage = function () {
        return this.HourlyWage;
    };
    // setters
    Employee.prototype.setFirstName = function (firstName) {
        this.FirstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.LastName = lastName;
    };
    Employee.prototype.setAge = function (age) {
        this.Age = age;
    };
    Employee.prototype.setPhoneNumber = function (phoneNumber) {
        this.PhoneNumber = phoneNumber;
    };
    Employee.prototype.setState = function (state) {
        this.State = state;
    };
    Employee.prototype.setZipCode = function (zipCode) {
        this.ZipCode = zipCode;
    };
    Employee.prototype.setOccupation = function (occupation) {
        this.Occupation = occupation;
    };
    Employee.prototype.setHourlyWage = function (hourlyWage) {
        this.HourlyWage = hourlyWage;
    };
    // methods
    Employee.prototype.fullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    Employee.prototype.nameAndNumber = function () {
        return this.fullName() + " " + this.PhoneNumber;
    };
    Employee.prototype.location = function () {
        return this.State + " " + this.ZipCode;
    };
    Employee.prototype.weeklyWage = function (hours) {
        return this.HourlyWage * hours;
    };
    Employee.prototype.addCerts = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            this.Certifications[i] = args[i];
        }
        return this.fullName() + " Certifications: " + this.Certifications;
    };
    Employee.createEmployee = function (option) {
        return new Employee(option.FirstName, option.LastName);
    };
    return Employee;
}());
var emp1 = new Employee("John", "Doe", 25, 8285689403, "North Carolina", 28679, "Developer", 25);
document.getElementById("div2").innerHTML = emp1.nameAndNumber() + " Location: " + emp1.location();
var emp2 = new Employee("Anna", "Smith", 20, 4930483948, "California", 24950, "Engineer", 30);
document.getElementById("div3").innerHTML = emp2.nameAndNumber() + " Weekly Wage: " + emp2.weeklyWage(40).toString();
var emp3 = new Employee("Kyle", "Sigmon", 30, 8693847284, "New York", 49275, "Teacher", 19);
document.getElementById("div4").innerHTML = emp3.addCerts("CSM", "CDMA", "MBA");
var emp4 = Employee.createEmployee({ FirstName: "Keng", LastName: "Moua" });
document.getElementById("div5").innerHTML = emp4.fullName();
