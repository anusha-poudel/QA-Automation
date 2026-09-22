interface Payment{
    id: string;
    amount: number;
    method: "esewa" | "Khalti";
    status: "SUCCESS" | "FAILED";
}

function print(p: Payment){
    console.log(`id: ${p.id}, amt: ${p.amount} status: ${p.status}`);
}

let payment: Payment = {
    id: "2213",
    amount: 2300,
    method: "esewa",
    status: "FAILED",
}

print(payment);