interface Payment{  //added this interface
    amountPaisa: number;
    status: 'SUCCESS' | 'REJECTED' | 'FAILED';
}
// validate() checks a payment and returns a message
function validate(payment: Payment) {
    // reject any amount that is zero or below
  if (payment.amountPaisa <= 0) {
    return "Amount must be positive";
  }
  // reject anything that is not a success
  if (payment.status !== "SUCCESS") {
    return "Not a successful payment";
  }
  // otherwise the payment is valid
  return `Valid: ${payment.amountPaisa} paisa`;
}

// this call hides two bugs plain JS will not catch
console.log(validate({
  //amountPaisa: "50000", status: "SUCESS"-errors shown, both before running since the function Validate accepts a valid Payment.
    amountPaisa: 50000, status: "SUCCESS"
}));