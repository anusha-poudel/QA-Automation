const findById = (users, id) => users.find((user) => user.id === id);

const users = [
  { id: 1, name: "Ansa" },
  { id: 2, name: "Lia" },
];
console.log(findById(users, 2));  
console.log(findById(users, 3)); 