const totalPrice = (items) => items.reduce((sum, item) => sum + item.price, 0);

const items = [{ price: 100 }, { price: 200 }, { price: 150 }];
console.log(totalPrice(items)); 