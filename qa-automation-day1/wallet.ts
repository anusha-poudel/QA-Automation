export {};
const MerchantName: string = "Anu Store";
let BalancePaisa: number = 300000; //starting balance
const KycVerified: boolean = true;
const TransferAmtPaisa: number = 100000;  //amt to be transferred

const CashBackPaisa = TransferAmtPaisa * 0.02; //2% cashback amt

BalancePaisa = (BalancePaisa - TransferAmtPaisa) + CashBackPaisa; //remaining balance

const canSend = (BalancePaisa>=TransferAmtPaisa) && KycVerified && TransferAmtPaisa>0;

console.log(`Merchant : ${MerchantName}\n 
    KYC : Verified\n 
    Sent : ${TransferAmtPaisa/100}\n 
    Cashback : ${CashBackPaisa/100}\n
    Balance : ${BalancePaisa/100}\n 
    Approved: Yes`);
