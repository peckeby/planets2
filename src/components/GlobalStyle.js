import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
ul {
    list-style-type: none;
    padding-left: 0;
}
p {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    margin: 0;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  height: 100vh}

main {
  flex: 1 0 auto;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

button {
  padding: 0;
}
`;
