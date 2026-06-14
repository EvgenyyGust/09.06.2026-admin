import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PizzaList.css';

export default function PizzaList({pizzas, setPizzas}) {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        setPizzas(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div className="pizza-list-container">
            <h2>Pizza List</h2>

            <div className="pizza-grid">
                {pizzas.map((pizza) => (
                    <div className="pizza-card" key={pizza.id}>
                        <img
                            src={pizza.picture}
                            alt={pizza.name}
                        />

                        <h3>{pizza.name}</h3>

                        <p>{pizza.description}</p>

                        <p>
                            <strong>Price:</strong> ${pizza.price}
                        </p>

                        <p>
                            <strong>Available:</strong>{" "}
                            {pizza.isAvailable ? "Yes" : "No"}
                        </p>

                        <div className="button-group">
                            <button
                                className="update-btn"
                                onClick={() => navigate(`/update/${pizza.id}`)}
                            >
                                Update
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(pizza.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}