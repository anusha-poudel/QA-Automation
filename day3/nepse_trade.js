const transactions = [
  { id: 1, symbol: 'NABIL', type: 'BUY',  qty: 10, price: 512 },
  { id: 2, symbol: 'ADBL',  type: 'SELL', qty:  5, price: 240 },
  { id: 3, symbol: 'NABIL', type: 'BUY',  qty:  8, price: 505 },
  { id: 4, symbol: 'HDL',   type: 'SELL', qty: 12, price: 630 },
  { id: 5, symbol: 'ADBL',  type: 'BUY',  qty: 20 /* price missing! */ },
]

const labels = transactions.map(t => `${t.symbol}: Rs ${t.price}`)

const buys = transactions.filter(t => t.type==='BUY')

const firstNabil = transactions.find(t => t.symbol==='NABIL')

const total = transactions.filter(t=> t.price!==undefined).reduce((sum, t) => sum + t.price, 0);

const missing = transactions.find(t => t.price===undefined);

function validate(t){
    return `Transaction #${t.id} INVALID -> price is missing`;
}

const spent = buys.filter(t=> t.price!==undefined).reduce((sum,t) => sum+t.price, 0);

const {id, symbol, type, qty, price} = transactions[0];

console.log(`
    Buy Count: ${buys.length}
    First NABIL trade id: ${firstNabil.id}
    Total value of all trades: RS. ${total}
    #${missing.id} ${missing.symbol} RS: ${missing?.price?? 'N/A'}
    ${validate(missing)}
    Total spent on BUY trades: RS. ${spent}
    `);
