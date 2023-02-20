import { createGlobalStyle } from 'styled-components';
import { device } from 'devices.styled';

export const GlobalStyle = createGlobalStyle`

header {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.desktop} {
    flex-direction: row;
    padding: 0 2.563rem 1.688rem 1.938rem;

  }
}

main {
  flex: 1 0 auto;
  padding: 9.125rem 2.5rem 0 2.438rem;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.25rem 10.3125rem 3.5rem 10.3125rem;
  }
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

ul {
  list-style-type: none;
  padding-left: 0;
}

button {
  padding: 0;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 0;
  @media ${device.desktop} {
    padding: 1.375rem 0 0 0;
  };
}
`;
