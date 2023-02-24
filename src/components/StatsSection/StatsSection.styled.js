import { device } from 'assets/devices.styled';
import styled from 'styled-components';

export const StatsDiv = styled.section`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    align-items: stretch;
    gap: calc(8rem / 16);
  }

  @media ${device.tablet} {
    gap: calc(11rem / 16);
    flex-direction: row;
    justify-content: center;
  }

  @media ${device.desktop} {
    flex-direction: row;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(87rem / 16);
    gap: calc(30rem / 16);
  }

  @media ${device.desktopL} {
    justify-content: center;
    gap: 1.875rem;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 76.375rem;
  }
`;

export const StatsBox = styled.div`
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);

  @media ${device.mobile} {
    padding: 10px 24px;
    display: flex;
    justify-content: space-between;
  }

  @media ${device.tablet} {
    flex-direction: column;
    min-width: 10.25rem;
    padding: 1rem 0 calc(19rem / 16) calc(15rem / 16);
  }

  @media ${device.desktop} {
    flex-direction: column;
    width: calc(255rem / 16);
    padding-top: 1.25rem;
    padding-bottom: 1.6875rem;
    padding-left: 1.4375rem;
  }
`;

export const StatsName = styled.p`
  font-family: 'Spartan';
  opacity: 0.5;
  letter-spacing: 0.06rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.5rem;
  line-height: 1rem;

  @media ${device.tablet} {
    font-size: 0.5rem;
    line-height: 1rem;
    margin-bottom: 0.375rem;
  }

  @media ${device.desktop} {
    line-height: 1.56rem;
    font-size: 0.69rem;
    margin-right: 0.5rem;
  }
`;

export const StatsNum = styled.p`
  font-family: 'Antonio';
  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.desktop} {
    font-size: 2.5rem;
    line-height: 3.25rem;
  }
`;
