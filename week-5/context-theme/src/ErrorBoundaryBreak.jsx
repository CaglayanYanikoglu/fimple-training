import { useEffect, useState } from "react";

const ErrorBoundaryBreak = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      // setCounter(counter + 1);
      throw new Error('I crashed!');
    }, 2000);
  }, [])
  return (
    <p>Error boundary break counter: {counter}</p>
  );
};

export default ErrorBoundaryBreak;
