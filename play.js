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

// const person = {
//   name: "Siba",
//   age: 29,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };
// person.greet();

class Student {
  constructor(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
  }
  setPlacementAge(minPlacementAge) {
    return (miniMarks) => {
      if (this.mark > miniMarks && this.age > minPlacementAge) {
        console.log(this.name + " is ready for placement");
      } else {
        console.log(this.name + " is not ready for placement");
      }
    };
  }
}

const Yash = new Student("yash", 25, 35);
const siba = new Student("siba", 23, 100);
