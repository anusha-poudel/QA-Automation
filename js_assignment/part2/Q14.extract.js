function formatUser(user){
    const {name, email, age} = user;
    return `${name} (${email})`;
}

let user= formatUser({name:'Anusha', email:'anusha@gmail.com', age:20});
console.log(user);