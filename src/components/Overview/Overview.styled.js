import { device } from 'devices.styled';
import styled from 'styled-components';
import { colorSizeArr } from 'assets/colorsSizeArr';

export const DivInfo = styled.section`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin-top: 28.75rem;
  }

  @media ${device.desktop} {
    width: 1110px;
    flex-direction: row;
    margin: 0 0 5.4375rem 0;
    justify-content: space-between;
  }
  @media ${device.desktopL} {
    margin-top: 3rem;
  }
`;

export const ImgContainer = styled.div`
  @media ${device.desktop} {
    flex-grow: 0.71;
    width: ${props => colorSizeArr[props.ind].sizeS}px;
    position: relative;
    width: fit-content;
  }
  @media ${device.desktopL} {
    flex-grow: 0.54;
  }
`;

export const ImgPlanet = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => colorSizeArr[props.ind].sizeS}px;
  height: ${props => colorSizeArr[props.ind].sizeS}px;

  @media ${device.tablet} {
    top: 51.5%;
    width: ${props => colorSizeArr[props.ind].sizeM}px;
    height: ${props => colorSizeArr[props.ind].sizeM}px;
  }

  @media ${device.desktop} {
    top: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${props => colorSizeArr[props.ind].size}px;
    height: ${props => colorSizeArr[props.ind].size}px;
  }
  @media ${device.desktopL} {
    width: ${props => colorSizeArr[props.ind].sizeL}px;
    height: ${props => colorSizeArr[props.ind].sizeL}px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 4.313rem;

  @media ${device.tablet} {
    justify-content: space-between;
  }
  @media ${device.desktop} {
    display: block;
  } ;
`;

export const TextSection = styled.div`
  display: block;
`;

export const NamePlanet = styled.h2`
  font-size: 5rem;
  line-height: 6.5rem;
  text-transform: uppercase;
  font-family: 'Antonio';
`;

export const InfoText = styled.p`
  margin-top: 1.4375rem;
  font-size: 0.875rem;
  font-family: 'Spartan';
  line-height: 1.563rem;
  margin-bottom: 1.4375rem;
  max-width: 21.88rem;
  height: 9.375rem;
`;

export const SourseDiv = styled.p`
  font-size: 0.88rem;
  line-height: 1.56rem;
  font-family: 'Spartan';
  opacity: 0.5;
  width: 21.88rem;
  margin-bottom: 2.4375rem;
`;

export const SourceLink = styled.a`
  font-weight: 700;
  text-decoration: underline;
  display: inline-flex;
`;

export const LinkSpan = styled.span`
  content: url('./assets/external.svg');
  display: inline-block;
  width: 12px;
  height: 12px;
  align-self: center;
  margin-left: 8px;
`;

export const ButtonList = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const ButtonItem = styled.li`
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  color: var(--white);
  cursor: pointer;
  font-family: 'Spartan';
  font-weight: 700;
  width: 21.88rem;
  height: 3rem;
  background-color: ${props => props.bkgColor};
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.56rem;
  letter-spacing: 0.19rem;
  text-transform: uppercase;

  &:hover {
    background: rgba(85, 85, 85, 0.2);
  }
`;

export const SpanNum = styled.span`
  opacity: 0.5;
  color: var(--white);
  margin-right: 1.75rem;
  margin-left: 1.75rem;
`;
