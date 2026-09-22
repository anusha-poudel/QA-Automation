const getAdults = (people) => people.filter((person) => person.age >= 18);

const people = [
  { name: "Ansa", age: 21 },
  { name: "Kimi", age: 10 },
  { name: "Lia", age: 18 },
];
console.log(getAdults(people));
