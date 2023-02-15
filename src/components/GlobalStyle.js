import { createGlobalStyle } from 'styled-components';
import img from '../assets/background-stars.svg';

export const GlobalStyle = createGlobalStyle`

:root {
--main: #070724;
--white:#FFFFFF;
--info: #38384F;
--grey: #838391;
--mercury: #419EBB;
color: var(--white);
}

body {
  background-color: var(--main);
  background-image: url(${img});
}


ul {
  list-style-type: none;
  padding-left: 0;
}

h2 {
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 1.75rem;
  line-height: 1.625rem;
  margin: 0;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--white);
}

.mainContainer {
  display: flex;
  flex-direction: column;
  max-height: 64rem;
  padding: 1.375rem 0 3.5rem 0;
}

main {
  flex: 1 0 auto;
  padding: 5.25rem 10.3125rem 3.5rem 10.3125rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

button {
  padding: 0;
}


header {
  display: flex;
  justify-content: space-between;
  padding: 0 2.563rem 1.688rem 1.938rem;
}
`;
