import { createGlobalStyle } from 'styled-components';

type Theme = {
  light: {
    colors: { primary: string; secondary: string };
  };
  dark: {
    colors: { primary: string; secondary: string };
  };
};

interface iProps {
  theme: Theme;
  themeValue: keyof Theme;
}

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }
    body {
      background: white;
      transition: background 1s ease-in-out;
    }
`;
