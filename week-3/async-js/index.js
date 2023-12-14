
// event loop
/*  console.log('1');
setTimeout(() => {
  console.log('3');
}, 2000);
console.log('2');

const bar = () => {
  console.log('bar');
  console.log('bar end')
}

const foo = () => {
  console.log('foo');
  bar();
  console.log('foo end')
}

const init = () => {
  console.log('init')
  foo();
  console.log('init end')
}

init(); */

// Call Stack
// init
// init foo
// init foo bar
// init foo
// init
// 

/* let data = [];

const fetchData = async (callback) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  console.log('after ', res);
  data = await res.json();
  callback();
};

const printData = () => {
  console.log(data);
};

const init = () => {
  fetchData(printData);
}

init();
 */

/* const user = {
  name: 'caglayan',
  getName: function() {
    console.log(this);
  },
  getNameWithArrow: () => {
    console.log(this);
  }
}

// user.getName();
user.getNameWithArrow();

// console.log(this); */

/* class Human {
  constructor() {
    console.log('human init');
    this.name = 'caglayan';
  }

  getName() {
    console.log('get name', this.name);
  }

  getNameArrow = () => {
    console.log('get name arrow', this);
  }
}

const human = new Human();
human.getName();
 */


/* const user = {
  name: 'caglayan',
  getName: function() {
    return this.name
  }
}

console.log(user.getName()); */
/* let fullName = person.fullName.bind(member); */

