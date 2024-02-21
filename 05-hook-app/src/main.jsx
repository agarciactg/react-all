// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";
import React from 'react';


// import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>

      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
