import ReactDOM from 'react-dom';
import { useCloseModalByEscape } from '../../hooks';
import { Overlay, Container } from './styles';

export function Modal({ children, isModalOpen, setModalIsOpen }) {
  useCloseModalByEscape(setModalIsOpen);

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Container>{children}</Container>
    </Overlay>,
    document.getElementById('modal')
  );
}
