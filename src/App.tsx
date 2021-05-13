import { BrowserRouter as Router } from 'react-router-dom';
import { FoodsProvider } from './hooks/useFoods';
import { ModalProvider } from './hooks/useModal';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <FoodsProvider>
    <ModalProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ModalProvider>
  </FoodsProvider>
);

export default App;
