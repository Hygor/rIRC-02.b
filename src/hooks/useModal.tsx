import {
  createContext,
  ReactNode,
  useContext,
  useState
} from "react";

type ModalProviderProps = {
  children: ReactNode
}

type ModalType = string | 'add';

interface ModalContextData {
  modalType: ModalType;
  modalOpened: boolean;
  openModal: (type: string) => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);


export function ModalProvider({ children } : ModalProviderProps) {

  const [ modalType, setModalType ] = useState<ModalType>('add');
  const [ modalOpened, setModalOpened ] = useState(false);

  const openModal = (modalType: ModalType) => {
    console.log('opening type => ', modalType);
    setModalType(modalType);
    setModalOpened(true);
  }
  const closeModal = () => setModalOpened(false);
  const toggleModal = () => setModalOpened(!modalOpened);

  return (
    <ModalContext.Provider
      value={{
        modalType,
        modalOpened,
        openModal,
        closeModal,
        toggleModal,
      }}>
      { children }
    </ModalContext.Provider>
  )

}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}