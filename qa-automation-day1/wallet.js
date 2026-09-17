export {};
const MerchantName = "Anu Store";
let BalancePaisa = 300000; //starting balance
const KycVerified = true;
const TransferAmtPaisa = 100000;  //amt to be transferred

const CashBackPaisa = TransferAmtPaisa * 0.02; //2% cashback amt

BalancePaisa = (BalancePaisa - TransferAmtPaisa) + CashBackPaisa; //remaining balance

const canSend = (BalancePaisa>=TransferAmtPaisa) && KycVerified && TransferAmtPaisa>0;

console.log(`Merchant : ${MerchantName}
    KYC : ${KycVerified ? "Verified" : "Not Verified"} 
    Can Send : ${canSend}
    Sent : ${TransferAmtPaisa/100}
    Cashback : ${CashBackPaisa/100}
    Balance : ${BalancePaisa/100} 
    Approved : ${canSend ? "Yes" : "No"}`);
