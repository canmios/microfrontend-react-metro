import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import metro from '/metro.svg'
import './App.css'
import TransactionForm from './components/TransactionForm';
import './styles/main.css';

function App() {
  return (
      <>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
              <a href="https://www.metrodemedellin.gov.co/" target="_blank">
                  <img src={metro} className="logo" alt="Metro logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="App">
              <h1>Transaction Form</h1>
              <TransactionForm/>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
