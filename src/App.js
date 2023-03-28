import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './action/index'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>using React and Rudex</h4>
        <div className='quntity'>
          <a className='quntity_minus' title="Decrement"
            onClick={() => dispatch(decNumber())}><span>-</span></a>
          <input className="quntity_input" name='quntity' type="text" value={myState}></input>
          <a className='quntity_plus' title="Decrement"
            onClick={() => dispatch(incNumber())}><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App