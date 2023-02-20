import { device } from 'devices.styled';
import styled from 'styled-components';

export const StatsDiv = styled.section`
  width: 69.375rem;
  display: flex;
  gap: 1.875rem;
  justify-content: center;
  padding-right: 3.25rem;

  @media ${device.tablet} {
    gap: 0.69rem;
    justify-content: flex-start;
  }

  @media ${device.desktopL} {
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 76.375rem;
  }
  @media ${device.desktop} {
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StatsBox = styled.div`
  width: 15.94rem;
  padding-top: 1.25rem;
  padding-bottom: 1.6875rem;
  padding-left: 1.4375rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  max-height: 8rem;

  @media ${device.tablet} {
    max-width: 10.25rem;
    padding: 1rem 0 1.1875rem 0.9375rem;
  }
`;

export const StatsName = styled.p`
  font-family: 'Spartan';
  font-size: 0.69rem;
  opacity: 0.5;
  line-height: 1.56rem;
  letter-spacing: 0.06rem;
  font-weight: 700;
  margin-right: 0.5rem;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 0.5rem;
    line-height: 1rem;
    margin-bottom: 0.375rem;
  }
`;

export const StatsNum = styled.p`
  font-size: 2.5rem;
  line-height: 3.25rem;
  font-family: 'Antonio';
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 1.5rem;
    line-height: 1rem;
  }
`;
