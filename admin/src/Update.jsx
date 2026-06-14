import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Update.css'

export default function Update({ pizzas, setPizzas }) {

  const { id } = useParams()
  const navigate = useNavigate()

  const [pizza, setPizza] = useState({
    name: "",
    description: "",
    price: 0
  })

  useEffect(() => {
    const found = pizzas.find(p => p.id === Number(id))
    if (found) setPizza(found)
  }, [id, pizzas])

  const handleChange = (e) => {
    const { name, value } = e.target

    setPizza(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setPizzas(prev =>
      prev.map(p =>
        p.id === Number(id)
          ? { ...p, ...pizza, price: Number(pizza.price) }
          : p
      )
    )

    navigate("/pizzalist")
  }

  return (
    <div className="update-form-container">
      <h2>Update Pizza #{id}</h2>

      <form onSubmit={handleSubmit} className="update-form-container">
        <h2>Update Pizza #{id}</h2>
        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={pizza.description}
            onChange={handleChange}
            placeholder="Enter ingredients or description"
          />
        </div>

        <div className="form-group">
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

        <div className="form-group">
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

        <button type="submit">
          Update Pizza
        </button>
      </form>
    </div>
  )
}