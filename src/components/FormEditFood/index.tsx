import { FoodType, useFoods } from '../../hooks/useFoods';

import { FiCheckSquare } from 'react-icons/fi';
import { Input } from '../Input';

import { Form } from './styles';
import { useModal } from '../../hooks/useModal';

interface FormEditFoodProps {
  data: FoodType
}

export function FormEditFood({ data }: FormEditFoodProps) {

  const { updateFood } = useFoods();
  const { closeModal } = useModal();
  const handleSubmit = (updatedData: FoodType) => {
    updateFood(updatedData);
    closeModal();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} initialData={data}>
        <h1>Edit Dish</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="edit-food-button">
          <div className="text">Save</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </>
  );

};
