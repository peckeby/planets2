import { device } from 'assets/devices.styled';
import styled from 'styled-components';

export const ImgGeology = styled.img`
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    bottom: -34%;
  }

  @media ${device.desktop} {
    top: 85%;
  }
`;
