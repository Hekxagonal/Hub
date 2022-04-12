import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, themeValue }) =>
    theme[themeValue].colors.primary};
  padding: 5px;
  padding-right: 50px;
  border-radius: 20px;
  border-bottom: 5px solid black;
`;

export const Icon = styled.svg`
  position: absolute;
  width: 90px;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 110px;

  ::before {
    display: block;
    position: absolute;
    content: 'asd';
    z-index: 10;
    width: 10px;
    height: 10px;
    background: black;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme, themeValue }) => theme[themeValue].colors.text};
`;
