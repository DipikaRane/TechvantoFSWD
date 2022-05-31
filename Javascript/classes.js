
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }


//   // unnamed
// let Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name);
//   // output: "Rectangle"
  
//   // named
// let Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name);
//   // output: "Rectangle2"

//   //inheritance
//   // parent class
// class Person { 
//   constructor(name) {
//       this.name = name;
//   }

//   greet() {
//       console.log(`Hello ${this.name}`);
//   }
// }

// // inheriting parent class
// class Student extends Person {

// }

// let student1 = new Student('Techvanto');
// student1.greet();

// parent class
class Person { 
  constructor(name) {
      this.name = name;
  }
  greet() {
      console.log(`Hello ${this.name}`);
  }
}
// inheriting parent class
class Student extends Person {
  constructor(name) {
      console.log("Creating student class");    
      // call the super class constructor 
      //and pass in the name parameter
      super(name);
  }
}
let student1 = new Student('Techvanto');
student1.greet();


