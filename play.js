// const name = "Siba";
// let age = 23;
// let hobby = true;

//arrow function

// const summarizeUser = (userName, userAge, userHobby) => {
//   return (
//     "Name is " +
//     userName +
//     " and age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHobby
//   );
// };

// const add = (a, b) => a + b;

// console.log(summarizeUser(name, age, hobby));
// console.log(add(2, 3));

//Object

const person = {
  name: "Siba",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
person.greet();
