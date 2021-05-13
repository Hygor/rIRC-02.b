import { Logo } from '../Logo';
import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';
import { useModal } from '../../hooks/useModal';

export function Header() {

  const { openModal } = useModal();
  const handleAddFood = () => openModal('add');

  return (
    <Container>
      <header>
        <Logo />
        <nav>
          <div>
            <button type="button" onClick={handleAddFood}>
              <div className="text">New Dish</div>
              <div className="icon">
                <FiPlus size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

