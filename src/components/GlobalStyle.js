import { createGlobalStyle } from 'styled-components';
import { device } from 'assets/devices.styled';

export const GlobalStyle = createGlobalStyle`

header {
  @media ${device.mobile}{
  max-height: 68px;
  }

  @media ${device.tablet}{
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: calc(159rem/16);
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0 2.563rem 0 1.938rem;
  }
}

main {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 0 1.5rem;
  
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
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
  padding-bottom: 2rem;
}
`;
