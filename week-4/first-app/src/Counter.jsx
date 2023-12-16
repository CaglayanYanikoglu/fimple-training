import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
// const Counter = (props) => {
const Counter = ({
  initialCount
}) => {
  // const { initialCount } = props; // object destructing EC6
  // const initialCount = props.initialCount;

  const [count, setCount] = useState(0);

  console.log('rendered');
  // let count = 5; // wrong way

  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1); // async
  }

  /* const handleClickAsync = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // async
    }, 5000)
  } */

  useEffect(() => {
    console.log('use effect count', count);
    const timeout = setInterval(() => {
      console.log('timeout');
    }, 3000);

    return () => {
      // Clear function
      clearInterval(timeout);
      console.log('component Will unmount');
    }
  }, [count]) //
   // [] => ComponentDidMount (in first render),
   //  [count] => ComponentDidUpdate, 
   // ComponentWillUnMount => return function

   /* const increaseCounter = (countValue) => {
    setCount(countValue);
   } */

  return (
    <div>
      <p>Counter {count}</p>
      {/* <button onClick={handleClick}>Increase</button> */}
      {/* <button onClick={() => increaseCounter(15)}>Increase</button> */}
      <button onClick={handleClick}>Increase 5seconds later</button>
    </div>
  )
}

export default Counter;
