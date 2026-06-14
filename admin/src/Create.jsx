import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css'

export default function Create({pizzas, setPizzas}) {
  const navigate = useNavigate()

  const [pizza, setPizza] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    isAvailable: true
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setPizza(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

      const newPizza = {
      ...pizza,
      id: Date.now(),
      price: Number(pizza.price)
    }

    setPizzas([...pizzas, newPizza])

    navigate("/pizzalist")
  }

  return (
    <div style={{ marginTop: "25px" }}>
      <form onSubmit={handleSubmit}>
        <h2>Create Pizza</h2>
        <div>
          <label htmlFor="name">Pizza Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={pizza.name}
            onChange={handleChange}
            placeholder="Enter pizza name"
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={pizza.description}
            onChange={handleChange}
            placeholder="Enter ingredients or description"
            maxLength="200"
          />
        </div>

        <p>
          Characters: {pizza.description.length}/200
        </p>

        <div>
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={pizza.price}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="picture">Picture URL:</label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={pizza.picture}
            onChange={handleChange}
            placeholder="Enter picture URL"
          />
        </div>

        <div>
          <label htmlFor="available">Available</label>
          <input
            type="checkbox"
            id="available"
            name="isAvailable"
            checked={pizza.isAvailable}
            onChange={handleChange}
          />
        </div>

        {pizza.picture && (
          <div>
            <h3>Image Preview</h3>

            <img
              src={pizza.picture}
              alt="Pizza preview"
              width="250"
            />
          </div>
        )}

        <h3>Pizza Preview</h3>

        <table border="1">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{pizza.name}</td>
            </tr>

            <tr>
              <td>Description</td>
              <td>{pizza.description}</td>
            </tr>

            <tr>
              <td>Price</td>
              <td>{pizza.price}</td>
            </tr>

            <tr>
              <td>Available</td>
              <td>{pizza.isAvailable ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>

        <br />

        <button type="submit">Create Pizza</button>
      </form>
    </div>
  )
}