import { FoodType, useFoods } from '../../hooks/useFoods';
import { useModal } from '../../hooks/useModal';

import { Header } from '../../components/Header';
import { Food } from '../../components/Food';
import { FormAddFood } from '../../components/FormAddFood';
import { FormEditFood } from '../../components/FormEditFood';
import { Modal } from '../../components/Modal';

import { FoodsContainer } from './styles';

export function Dashboard() {

  const {
    foods,
    setEditingFood,
    editingFood,
    deleteFood
  } = useFoods();

  const {
    modalType,
    openModal,
  } = useModal();


  const handleEditFood = (food: FoodType) => {
    setEditingFood(food);
    openModal('edit');
  };


  return (
    <>
      <Header />

      <FoodsContainer data-testid="foods-list">
        {foods && foods.map( food => (
          <Food
            key={ food.id }
            food={ food }
            handleDelete={ () => deleteFood( food.id ) }
            handleEditFood={ () => handleEditFood( food ) }
          />
        ))}
      </FoodsContainer>
      
      <Modal>
        { (modalType !== 'add')
          ? ( <FormEditFood data={editingFood} /> )
          : ( <FormAddFood /> )
        }
      </Modal>
    </>
  );

};
