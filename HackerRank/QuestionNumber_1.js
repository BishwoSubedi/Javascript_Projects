// //Parent Activity class
// function Activity(amount) {
//     this.amount = amount;
//   }
  
//   Activity.prototype.setAmount = function(value) {
//     if (value <= 0) {
//       return false;
//     }
//     this.amount = value;
//     return true;
//   };
  
//   Activity.prototype.getAmount = function() {
//     return this.amount;
//   };
  
//   // Payment class inheriting from Activity
//   function Payment(amount, receiver) {
//     Activity.call(this, amount);
//     this.receiver = receiver;
//   }
  
//   Payment.prototype = Object.create(Activity.prototype);
  
//   Payment.prototype.setReceiver = function(value) {
//     this.receiver = value;
//   };
  
//   Payment.prototype.getReceiver = function() {
//     return this.receiver;
//   };
  
//   // Refund class inheriting from Activity
//   function Refund(amount, sender) {
//     Activity.call(this, amount);
//     this.sender = sender;
//   }
  
//   Refund.prototype = Object.create(Activity.prototype);
  
//   Refund.prototype.setSender = function(value) {
//     this.sender = value;
//   };
  
//   Refund.prototype.getSender = function() {
//     return this.sender;
//   };
  
//   const activity = new Activity(100);
//   console.log(activity.setAmount(150));  
//   console.log(activity.getAmount());      
  
//   const payment = new Payment(50, "John");
//   payment.setReceiver("Alice");
//   console.log(payment.getReceiver());  
//   console.log(payment.getAmount()); 
  
//   const refund = new Refund(75, "Bob");
//   refund.setSender("Charlie");
//   console.log(refund.getSender());        
//   console.log(refund.getAmount());     





// Alternative Method
// Parent Activity class
class Activity {
  constructor(amount) {
    this.amount = amount;
  }

  setAmount(value) {
    if (value <= 0) {
      return false;
    }
    this.amount = value;
    return true;
  }

  getAmount() {
    return this.amount;
  }
}

// Payment class inheriting from Activity
class Payment extends Activity {
  constructor(amount, receiver) {
    super(amount); //to access parent constructor
    this.receiver = receiver;
  }

  setReceiver(value) {
    this.receiver = value;
  }

  getReceiver() {
    return this.receiver;
  }
}

// Refund class inheriting from Activity
class Refund extends Activity {
  constructor(amount, sender) {
    super(amount);
    this.sender = sender;
  }

  setSender(value) {
    this.sender = value;
  }

  getSender() {
    return this.sender;
  }
}



// Example 
const activity = new Activity(100);
console.log(activity.setAmount(150));
console.log(activity.getAmount()); 

const payment = new Payment(50, "Bishwo");
payment.setReceiver("Ramey");
console.log(payment.getReceiver());  
console.log(payment.getAmount());  

const refund = new Refund(75, "Bob");
refund.setSender("Charlie");
console.log(refund.getSender());        
console.log(refund.getAmount());   

