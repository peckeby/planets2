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

h2 {
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 28px;
  line-height: 26px;
  margin: 0;
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
  max-height: 64rem;
  padding: 22px 0px 56px 0px;
  max-width: 1440px;
}

main {
  flex: 1 0 auto;
  padding: 13.25rem 10.3125rem 3.5rem 10.3125rem;
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
  padding: 0 41px 27px 31px;
}
`;
