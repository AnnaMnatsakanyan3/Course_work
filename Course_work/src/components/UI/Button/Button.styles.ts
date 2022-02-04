import styled from 'styled-components/macro';

interface IButton {
  variant?: string;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<IButton>`
  width: 100px;
  padding: 15px;
  outline: none;
  border: none;
  background: ${(p) =>
    p.variant === 'cancel' || p.disabled ? '#63636350' : '#4dcfe0'};
  color: #fff;
  cursor: ${(p) => (p.disabled ? 'unset' : 'pointer')};
  font-size: 20px;
  border-radius: 3px;
`;
