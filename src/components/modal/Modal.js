import { Wrapper, Div } from './Modal.styles';

const Modal = ({ onClick, children }) => {
  return (
    <Wrapper onClick={onClick}>
      <Div onClick={(ev) => ev.stopPropagation()}>{children}</Div>
    </Wrapper>
  );
};

export default Modal;
