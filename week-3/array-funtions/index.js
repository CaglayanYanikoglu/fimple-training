// Primitive Types:
// number, string, boolean


// Reference Types:
// object, array


/* let age = 28;

console.log({ age });

let copyAge = age;

console.log({ copyAge });

copyAge = 15;
age = 12;

console.log('after');

console.log({ age });
console.log({ copyAge }); */

/* const numbers = [1, 2, 3];

const copyNumbers = numbers; // this is not copying. 

console.log({ numbers });
console.log({ copyNumbers });

console.log('after');

copyNumbers.push(4);

console.log({ numbers });
console.log({ copyNumbers });

// Mutation  */


/* // How to copy object or array?
// Shallow Copy vs Deep Copy

const numbers = [1, 2 ,3, {
  name: 'caglayan'
}];
// const copyNumbers = [...numbers]; // Shallow copy
const copyNumbers = JSON.parse(JSON.stringify(numbers));
// const copyNumbers = numbers;

console.log({ numbers });
console.log({ copyNumbers });

console.log('after');

// copyNumbers.push(4);
copyNumbers[3].name = 'test';

console.log({ numbers });
console.log({ copyNumbers });

console.log(numbers === copyNumbers); */

// Array Methods

const names = ['Ali', 'Emre', 'Baris', 'Damla', 'Onur'];
/* for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
} */

/* const res = names.forEach((name, index) => {
  console.log(index);
  console.log(name);
}) */

const numbers = [1, 2, 3, 4, 5, 6];

const newArray = numbers.filter(number => number % 2 === 0).reduce((prevNumber, currentNumber) => prevNumber + currentNumber, 0);
// console.log(newArray); // chaining

// Merge two arrays

// const mergedArray = names + numbers; // wrong way
// const mergedArray = [...names, ...numbers]
// const mergedArray = numbers.concat(names);
// console.log(mergedArray);  

/* const sum = numbers.reduce((prevNumber, currentNumber) => prevNumber + currentNumber, 0);
console.log(sum); */

/* numbers.pop(); // delete last element
numbers.shift(); // delete first element
numbers.unshift(0); // add first element
numbers.push(7); // add last element */

// numbers.splice(2, 1); // remove from specific index


// console.log(numbers);

/* const multipleArray = [];

numbers.forEach(item => {
  multipleArray.push(item * 2);
}) */

/* const multipleArray = numbers.map(number => {
  return number * 2;
})
console.log(multipleArray);
console.log(numbers); */

/* const evenNumbers = numbers.filter(item => {
  return item % 2 === 0;
});

// const evenNumbers = numbers.filter(item => item % 2 === 0);

console.log(evenNumbers);
console.log(numbers); */

const user = {
  name: 'Akın',
  age: 26,
  'is-dancing': true,
  footballNumber: 26
}

// const copyUser = user;
const copyUser = {...user};
copyUser.isSmoking = true;

console.log(user);
console.log(user.name);
console.log(user.age);
// console.log(user.is-dancing);

const key = 'footballNumber';

console.log(user['name']);
console.log(user['is-dancing']);
console.log(user[key]);



