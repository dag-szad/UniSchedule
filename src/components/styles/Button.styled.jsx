import styled from 'styled-components';

const ButtonBg = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
  border: 1px solid #ffffff33;

  background-color: ${(props) => (props.$isActive ? '#75a6eb' : 'none')};

  transition: border-color ease-in-out 0.5s, background-color ease-in-out 0.5s;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    border: 1px solid #ffffff4d;
    background-color: ${(props) => (props.$isActive ? '#75a6eb' : '#ffffff1a')};
  }
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;

  background: none;
  border: none;
  outline: none;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  color: #fff;
`;

const ButtonImg = styled.img`
  width: 16px;
  height: 16px;
`;

const TextButton = styled.button`
  width: 125px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
  border: 1px solid #ffffff33;

  background-color: ${(props) => (props.$isActive ? '#75a6eb' : '#ffffff1a')};

  cursor: pointer;
  font-weight: 600;
  color: #fff;

  transition: border-color ease-in-out 0.5s, background-color ease-in-out 0.5s;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    border: 1px solid #ffffff4d;
    background-color: ${(props) => (props.$isActive ? '#75a6eb' : '#ffffff33')};
  }
`;

export { ButtonBg, ButtonStyled, ButtonImg, TextButton };
