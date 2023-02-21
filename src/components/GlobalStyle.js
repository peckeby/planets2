import { createGlobalStyle } from 'styled-components';
import { device } from 'devices.styled';

export const GlobalStyle = createGlobalStyle`

header {
  @media ${device.mobile}{
  max-height: 67px;
  }
  @media ${device.tablet}{
    display: flex;
    flex-direction: column;
  }
  @media ${device.desktop} {
    justify-content: space-between;
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
  margin: 0;
}

p {
  margin: 0;
  line-height: 1.38rem;
}

a {
  text-decoration: none;
  color: var(--white);
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-block-end: 0;
}

button {
  padding: 0;
}

.mainContainer {
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
  padding: 2rem 0 0 0;
}
  @media ${device.desktop} {
  }
}
`;
