import { useRef, useEffect } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);
  console.log('inputRef', inputRef);

  const handleClick = () => {
    console.log('submitted', inputRef.current.value);
  }

  useEffect(() => {
    inputRef.current.focus()
  }, []); /// ComponentDidMount (Dom'a elementler yüklendi mi?)

  return (
    <div>
      <h2>Use Ref</h2>
      <input ref={inputRef} type="text" placeholder="name" />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
};

export default UseRefExample;