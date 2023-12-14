/* class Human {
  constructor(name = 'Joe', age = 16) {
    console.log('constructor is called');
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello !');
  }

  getName() {
    console.log('get Name', this.name);
  }

  getAge() {
    console.log('get Age', this.age);
  }
} */

// instances

/* const human1 = new Human('caglayan', 28);

human1.getName();
human1.getAge();

const human2 = new Human();

human2.getName();
human2.getAge(); */


/* class FootballPlayer extends Human {

  
}

const footballPlayer = new FootballPlayer();
footballPlayer.sayHello();

 */

// Closures

/* const sayHello = () => {
  const name = 'Caglayan';
  console.log('say hello is worked');
  return () => {
    console.log(`Hello my name is ${name}`)
  }
}

// console.log(sayHello());

const callFunc = sayHello();

console.log('####');

callFunc(); */

/* 
let count = 0;
const increaseCount = () => {
  count += 1;
  return count;
}

console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount()) */

console.log('it worked');