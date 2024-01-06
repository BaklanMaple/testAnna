import './App.css';
import React, { useEffect, useState } from 'react';

function ChildTwo () {
  
  const [posts, setPosts] = useState([])
  const [val, setVal] = useState(1)
  const [valuePrice, setValuePrice] = useState(1000)
  const [value1, setValue1] = useState(1000)

  function Increment() {
    setVal(val-1) 
    if (val==0) {
      setVal(0)
    }
  }

  function Decrement() {
    setVal(val+1) 
  }

  useEffect(() => {
    setValuePrice(value1*val)
  },[val])

  function Prise1() {
    setValue1(1000)
    setValuePrice(1000)
  }

  function Prise2() {
    setValue1(2000)
    setValuePrice(2000)
  }

  function Prise3() {
    setValue1(3000)
    setValuePrice(3000)
  }



  return (
    <div className="App">
      <div className='App-ChildTwo'>
        <div>
          <p>Буровая штанга</p>
        </div>
        <div>
        <div>
          <p>Длина штанги, мм</p>
        </div>
        <div className='height'>
          <div onClick={Prise1} className='height-child'>1000</div>
          <div onClick={Prise2} className='height-child'>2000</div>
          <div onClick={Prise3} className='height-child'>3000</div>
        </div>
        </div>
        <div>
          <div>
            <p>Количество</p>
          </div>
          <div>
            <button onClick={Increment}>-</button>
            <input className='inputStale' value={val}></input>
            <button onClick={Decrement}>+</button>
          </div>
        </div>
        <div>{valuePrice}</div>
        <button>Купить</button>
      </div>
    </div>
  );
}

  export default ChildTwo;
