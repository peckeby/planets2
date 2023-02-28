import { device } from 'assets/devices.styled';
import styled from 'styled-components';

export const WelcomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0.7rem;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const WelcomeDiv = styled.div`
  @media ${device.desktop} {
    margin-left: 8rem;
    padding-top: 2rem;
  } ;
`;

export const WelcomeInfo = styled.q`
  display: block;
  quotes: initial;
  width: 50rem;
  margin-top: 2rem;
  font-family: 'Spartan';
  line-height: 1.56rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  @media ${device.mobile} {
    max-width: 350px;
  }
  @media ${device.tablet} {
    max-width: 750px;
  }

  @media ${device.desktop} {
    min-width: 550px;
    font-size: 0.8rem;
  }
`;

export const AuthorQuote = styled.p`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-family: 'Spartan';
  line-height: 1.56rem;
  font-style: italic;
  font-weight: 500;

  @media ${device.desktop} {
    margin-top: 1rem;
    font-size: 0.75rem;
    line-height: 1.56rem;
  } ;
`;
