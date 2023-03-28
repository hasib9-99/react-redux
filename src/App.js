import React from 'react'
import "./App.css"

const App = () => {
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>using React and Rudex</h4>
        <div className='quntity'>
          <a className='quntity_minus' title="Decrement"><span>-</span></a>
          <input className="quntity_input" name='quntity' type="text" value="0"></input>
          <a className='quntity_plus' title="Decrement"><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App