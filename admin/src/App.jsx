import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import PizzaList from './PizzaList'
import Create from './Create'
import Update from './Update'
import './App.css';

function App() {
  const navigate = useNavigate()

  const defaultPizzas = [
    {
      id: 1,
      name: "Pepperoni",
      description: "Tomato sauce, pepperoni, mozzarella, spices",
      price: "12",
      picture: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      isAvailable: true
    },
    {
      id: 2,
      name: "Margherita",
      description: "Tomato sauce, mozzarella, basil",
      price: "11",
      picture: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      isAvailable: false
    }
  ]

  const [pizzas, setPizzas] = useState(() => {
    const saved = localStorage.getItem("pizzas")
    return saved ? JSON.parse(saved) : defaultPizzas
  })

  useEffect(() => {
    localStorage.setItem("pizzas", JSON.stringify(pizzas))
  }, [pizzas])

  return (
    <>
      <h1>Admin</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("/pizzalist")}>
          Pizza list
        </button>

        <button onClick={() => navigate("/create")}>
          Create
        </button>

        <button onClick={() => navigate("/update/1")}>
          Update
        </button>
      </div>

      <Routes>
        <Route
          path="/pizzalist"
          element={<PizzaList pizzas={pizzas} setPizzas={setPizzas} />}
        />

        <Route
          path="/create"
          element={<Create pizzas={pizzas} setPizzas={setPizzas} />}
        />

        <Route
          path="/update/:id"
          element={<Update pizzas={pizzas} setPizzas={setPizzas} />}
        />
      </Routes>
    </>
  )
}

export default App