import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { api } from '../../services/api';

import { FoodType } from '../../hooks/useFoods';
import { Container } from './styles';

export type FoodProps = {
  food: FoodType;
  handleDelete: (foodId: number) => Promise<void>;
  handleEditFood: (food: number) => void;
}

export function Food({food, handleDelete, handleEditFood}: FoodProps) {

  const [isAvailable, setIsAvailable] = useState(food.available);


  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });
    setIsAvailable(!isAvailable);
  }

  return (
    <Container available={isAvailable}>
      <div className="icon-container">
        <button
          type="button"
          className="icon"
          onClick={() => handleEditFood(food.id)}
          data-testid={`edit-food-${food.id}`}
        >
          <FiEdit3 size={20} />
        </button>

        <button
          type="button"
          className="icon"
          onClick={() => handleDelete(food.id)}
          data-testid={`remove-food-${food.id}`}
        >
          <FiTrash size={20} />
        </button>
      </div>

      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p className="desc">{food.description}</p>
        <p className="price">
          € <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="availability-container">
          <p>{isAvailable ? 'Available' : 'Unavailable'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  )

}

