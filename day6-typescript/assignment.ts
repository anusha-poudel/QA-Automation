interface Payment{
    id: string;
    amount: number;
    status: 'SUCCESS'| 'REJECTED'| 'FAILED';
}

interface ApiResponse<T>{
    success: boolean;
    data: T;
}

const paymentObject:ApiResponse<Payment> = {
    success: true,
    data: {
        id: "1234",
        amount: 5000,
        status: "SUCCESS"
    }
}

const paymentMessage:ApiResponse<string> = {
    success: false,
    data: "Payment failed due to insufficient funds"
}

console.log(paymentObject.data.amount);
console.log(paymentMessage.data);