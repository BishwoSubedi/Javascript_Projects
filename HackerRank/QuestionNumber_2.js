 // Parent class: Employee
function Employee(title) {
    this.title = title;
  }
  
  Employee.prototype.setTitle = function(newTitle) {
    this.title = newTitle;
  };
  
  Employee.prototype.getTitle = function() {
    return this.title;
  };
  
  // Child class: Engineer
  function Engineer(title, isManager) {
    // Call the parent class constructor
    Employee.call(this, title);
  
    // Assign additional properties specific to Engineer
    this.isManager = isManager;
  }
  
  // Inherit from Employee
  Engineer.prototype = Object.create(Employee.prototype);
  Engineer.prototype.constructor = Engineer;
  
  // Additional functions for Engineer
  Engineer.prototype.setManager = function(newIsManager) {
    this.isManager = newIsManager;
  };
  
  Engineer.prototype.getIsManager = function() {
    return this.isManager;
  };
  
  // Create an Employee
  const employee = new Employee("Software Developer");
  console.log(employee.getTitle());  
  
  // Create an Engineer
  const engineer = new Engineer("Lead Engineer", true);
  console.log(engineer.getTitle());       
  console.log(engineer.getIsManager());    
  
  // Update properties
  engineer.setTitle("Senior Engineer");
  engineer.setManager(false);
  console.log(engineer.getTitle());       
  console.log(engineer.getIsManager());    
  