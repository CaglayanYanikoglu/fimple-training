import React, { useState, useMemo, useCallback } from "react";

const ChildComponent = ({
  sumNumbers
}) => {
  console.log('ChildComponent is rendered');
  return (
    <div>
      Child Component
      <button onClick={() => sumNumbers(5, 6)}>Sum Numbers</button>
    </div>
  )
}

const MemoComponent = React.memo(ChildComponent);

const Calculator = () => {
  const [count, setCount] = useState(0);

  const sumNumbers = (x, y) => {
    console.log(x + y);
  }

 /*  const sumNumbers = useCallback((x, y) => {
    console.log(x + y);
  }, []); */

  console.log('calculator is rendered');
  return (
    <div>
      <h2>Calculator</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <MemoComponent sumNumbers={sumNumbers} />
    </div>
  );
};

export default Calculator;