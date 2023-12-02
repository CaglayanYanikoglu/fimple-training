const printData = (data) => {
  
  const todosContainer = document.querySelector('#todos'); 
  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.innerText = item.title;
    todosContainer.appendChild(liElement);
  })
}


const fetchData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  /* const res = fetch(url).then(response => response.json()).then(data => {
    console.log('data', data);
  }) // promise chaining */

  const res = await fetch(url);
  const data = await res.json();

  const axiosRes = await axios.get(url);
  console.log('data geldiiii hello');
  return data;

};

const init = async () => {
  const data = await fetchData();
  console.log('fetch cagrildi', data);
  printData(data);
}

init();