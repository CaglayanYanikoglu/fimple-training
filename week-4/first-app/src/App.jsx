
import { useState } from 'react';

import Counter from './Counter';
import Home from './Home';
import Products from './Products';
import Calculator from './Calculator';
import UseMemoExample from './UseMemoExample';
import UseRefExample from './UseRefExample';
import './App.css';

function App() {
  /* const [willDelete, setWillDelete] = useState(false); */

  return (
    <div>
      <h2>App</h2>
      {/* {!willDelete && (
        <Home name="Caglayan" />
      )}
      <button onClick={() => setWillDelete(true)}>Delete home</button> */}
      {/* <Home name="Joe" /> */}
      {/* <Counter initialCount={10} appName="Patika" /> */}
      {/* <Products /> */}
      {/* <Calculator /> */}
      {/* <UseMemoExample /> */}
      <UseRefExample />
    </div>
  )
}

export default App
