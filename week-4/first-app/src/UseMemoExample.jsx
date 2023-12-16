import React, {useState, useMemo} from 'react';

const sumNumbers = (x, y) => {
  /* for(let i =0; i< 1000000000;i++) {

  } */
  console.log('sum numbers is called', x, y);
  return x + y;
}

const App = () => {
  // const [count, setCount] = useState(0);
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [total, setTotal] = useState(0);

  // const totalNumbers = useMemo(() => sumNumbers(parseInt(num1), parseInt(num2)), [num1, num2])
  const handleNumbers = () => {
    // const totalNumbers = sumNumbers(parseInt(num1), parseInt(num2));
    // const _total = totalNumbers(5, 12); 
    // setTotal(totalNumbers);
  }

  return (
    <div>
      <h2>Use memo</h2>
      <input placeholder='number1'  type='number' value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      <input placeholder='number2' type='number' value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <div>
        <button onClick={handleNumbers}>Sum Numbers</button>
        Total: {total}
      </div>
    </div>
  );
};

export default App;
