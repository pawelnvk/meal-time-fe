import { injectGlobal } from 'styled-components';

export const global = () => injectGlobal`
  html,
  html * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Muli', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
