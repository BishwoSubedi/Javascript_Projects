//Parent Activity class
function Activity(amount) {
    this.amount = amount;
  }
  
  Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
      return false;
    }
    this.amount = value;
    return true;
  };
  
  Activity.prototype.getAmount = function() {
    return this.amount;
  };
  
  // Payment class inheriting from Activity
  function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
  }
  
  Payment.prototype = Object.create(Activity.prototype);
  
  Payment.prototype.setReceiver = function(value) {
    this.receiver = value;
  };
  
  Payment.prototype.getReceiver = function() {
    return this.receiver;
  };
  
  // Refund class inheriting from Activity
  function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
  }
  
  Refund.prototype = Object.create(Activity.prototype);
  
  Refund.prototype.setSender = function(value) {
    this.sender = value;
  };
  
  Refund.prototype.getSender = function() {
    return this.sender;
  };
  
  const activity = new Activity(100);
  console.log(activity.setAmount(150));  
  console.log(activity.getAmount());      
  
  const payment = new Payment(50, "John");
  payment.setReceiver("Alice");
  console.log(payment.getReceiver());  
  console.log(payment.getAmount()); 
  
  const refund = new Refund(75, "Bob");
  refund.setSender("Charlie");
  console.log(refund.getSender());        
  console.log(refund.getAmount());     