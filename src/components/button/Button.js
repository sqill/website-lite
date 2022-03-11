import { StyledButton } from './Button.styles';

const Button = ({ label, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
