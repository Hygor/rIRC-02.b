import { FoodType, useFoods } from '../../hooks/useFoods';
import { useModal } from '../../hooks/useModal';

import { FiCheck } from 'react-icons/fi';
import { Input } from '../Input';

import { Form } from './styles';

export function FormAddFood() {

  const { addFood } = useFoods();
  const { closeModal } = useModal();
  const handleAddFood = (data: FoodType) => {
    addFood(data);
    closeModal();
  }
  
  return (
    <>
      <Form onSubmit={handleAddFood}>
        
        <h1>New Dish</h1>
        
        <Input name="image" placeholder="URL link" />
        <Input name="name" type="text" placeholder="Ex: Moda Italiana" />
        <Input name="price" type="number" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Add Dish</p>
          <div className="icon">
            <FiCheck size={24} />
          </div>
        </button>
      </Form>
    </>
  );

};
