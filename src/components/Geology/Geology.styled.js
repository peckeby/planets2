import { device } from 'assets/devices.styled';
import styled from 'styled-components';

export const ImgGeology = styled.img`
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    top: 54%;
  }

  @media ${device.desktop} {
    top: 85%;
  }
`;
