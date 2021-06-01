import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { api } from '../services/api';

export type FoodType = {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

type FoodsProviderProps = {
  children: ReactNode
}

interface FoodsContextData {
  foods: FoodType[];
  editingFood: FoodType;
  setEditingFood: (food: FoodType) => void;
  addFood: (food: FoodType) => Promise<void>;
  updateFood: (food: FoodType) => Promise<void>;
  deleteFood: (foodId: number) => Promise<void>;
}

const FoodsContext = createContext<FoodsContextData>(
  {} as FoodsContextData
);

export function FoodsProvider({ children } : FoodsProviderProps) {

  const [ foods, setFoods ] = useState<FoodType[]>([]);
  const [ editingFood, setEditingFood ] = useState<FoodType>({} as FoodType);

  useEffect( () => {
    api.get('/foods')
    .then( response => setFoods(response.data) );
  }, []);

  const handleAddFood = async (food: FoodType) => {
    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSetEditFood = (food: FoodType) => {
    setEditingFood(food);
  }
  
  const handleUpdateFood = async (food: FoodType) => { 
    console.log('updating...')
    try {
        const foodUpdated = await api.put(
          `/foods/${editingFood.id}`,
          { ...editingFood, ...food },
        );
        const foodsUpdated = foods.map(f =>
          f.id !== foodUpdated.data.id ? f : foodUpdated.data,
        );
        setFoods( foodsUpdated );

    } catch (err) {
      console.log(err);
    }
  }
  
  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foods.filter(food => food.id !== id);
    setFoods(foodsFiltered);
  }

  return (
    <FoodsContext.Provider
      value={{
        foods,
        editingFood,
        setEditingFood: handleSetEditFood,
        addFood: handleAddFood,
        updateFood: handleUpdateFood,
        deleteFood: handleDeleteFood
      }}>
      { children }
    </FoodsContext.Provider>
  )

}

export function useFoods() {
  const context = useContext(FoodsContext);
  return context;
}