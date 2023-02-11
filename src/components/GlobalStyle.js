import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
--main: #070724;
--white:#FFFFFF;
--info: #38384F;
--grey: #838391;
--mercury: #419EBB;
color: var(--white);
background-color: var(--main);
background-image: url('./assets/background-stars.svg');
}


ul {
    list-style-type: none;
    padding-left: 0;
}

h1 {
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 28px;
  line-height: 36px;
}

p {
    /* font-size: 24px; */
    /* line-height: 29px; */
    /* text-transform: uppercase; */
    margin: 0;
}

a {
  text-decoration: none;
  color: var(--white);
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
