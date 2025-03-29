import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home.jsx'
import AddExpensePage from './Pages/AddExpensePage'
import ExpenseListPage from './Pages/ExpenseListPage'
import './App.css'

const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-expense" element={<AddExpensePage />} />
      <Route path="/expenses" element={<ExpenseListPage />} />
    </Routes>

  )
}

export default App;
