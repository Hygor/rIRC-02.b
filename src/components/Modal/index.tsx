import { useModal } from '../../hooks/useModal';
import { ReactNode, useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  children: ReactNode;
}

export function Modal({children}: ModalProps) {
  
  const {
    modalOpened,
    closeModal,
  } = useModal();

  return (
    <ReactModal
      shouldCloseOnOverlayClick={ !false }
      onRequestClose={ closeModal }
      isOpen={ modalOpened }
      ariaHideApp={ false }
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
      >
      {children}
    </ReactModal>
  );

};

export default Modal;
