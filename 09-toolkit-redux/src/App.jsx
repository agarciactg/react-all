import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter'
import { useState } from 'react'

function App() {

  const { counter } = useSelector( state => state.counter )
  const [incrementAmount, setIncrementAmount] = useState(2);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Value is: {counter}</h1>
      <div className="card">
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <input 
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button type="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount)) || 0)}>
          Increment By Amount
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
