function getCity(user) {
  return user?.address?.city ?? 'Unknown';
}

const user1 = { name: "Ansa", address: { city: "Kathmandu" } };
const user2 = { name: "Anu", address: {} };                
const user3 = null;                           

console.log(getCity(user1)); 
console.log(getCity(user2)); 
console.log(getCity(user3));    
