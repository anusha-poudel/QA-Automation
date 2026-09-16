let balancePaisa = 500000;      // Rs 5,000
const perTxnLimitPaisa = 2500000;  // Rs 25,000

const batch = [
  { id: "TXN-01", gateway: "esewa",     amountPaisa: 15000,   verified: true  ,remarks: "grocery"},
  { id: "TXN-02", gateway: "khalti",    amountPaisa: 0,       verified: true  },
  { id: "TXN-03", gateway: "esewa",     amountPaisa: 2700000, verified: true  },
  { id: "TXN-04", gateway: "connectips",amountPaisa: 120000,  verified: false ,remarks: ""},
  { id: "TXN-05", gateway: "paypal",    amountPaisa: 50000,   verified: true  ,customer: {name: "Ansa", kyc: { level: 2}} },
  { id: "TXN-06", gateway: "esewa",     amountPaisa: 600000,  verified: true  },
];

function feeFor(amountPaisa) {
  if(amountPaisa<= 10000){
    return 0;
  }
  else if(amountPaisa<=100000){
    return 500;
  }
  else{
    return 1500;
  }
}

function validate(txn) {
  if(!txn.verified){
    return "KYC pending";
  }
  else if (!txn.customer || !txn.customer.kyc || txn.customer.kyc.level < 2) {
  return "Missing or insufficient KYC data";
  }
  else if(txn.amountPaisa<=0){
    return "Invalid amount";
  }
  else if(txn.amountPaisa>2500000){
    return "Exceeds per-transaction limit";
  }
  else if(txn.amountPaisa>balancePaisa){
    return "Insufficient balance";
  }
  else{
    return "OK";
  }
}

let routingMessage;
function route(gateway) {
  switch (gateway) {
  case "esewa":
    routingMessage = "Redirect to eSewa";
    break;
  case "khalti":
    routingMessage = "Redirect to Khalti";
    break;
    case "connectips":
    routingMessage = "Redirect to connect ips";
    break;
  case "paypal":
    routingMessage = "Redirect to PayPal";
    break;
  default:
    routingMessage = "Unsupported gateway"; 
    break;
}
}

let approvedCount=0, rejectedCount=0;
let totalValuePaisa = 0;
let rejectedIds =[];
for (const txn of batch){
    const reason = validate(txn);
    if(reason!=="OK"){
        rejectedCount++;
        console.log(`${txn.id} REJECTED ${reason}`);
        rejectedIds.push(txn.id);
        continue;
    }
    else{
        approvedCount++;
        route(txn.gateway);
        const fee = feeFor(txn.amountPaisa);
        totalValuePaisa += txn.amountPaisa;
        balancePaisa -= txn.amountPaisa;
        console.log(`${txn.id} APPROVED\t Rs.${(txn.amountPaisa / 100).toFixed(2)} FEE RS.${(fee/100).toFixed(2)} ${routingMessage}`);
    }
}

console.log(
    `Approved ${approvedCount}\t Rejected ${rejectedCount}\t Rejected IDs: ${rejectedIds.join(", ")}\t Value ${(totalValuePaisa/100).toFixed(2)}`
);
