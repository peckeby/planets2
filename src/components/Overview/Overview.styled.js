import { device } from 'assets/devices.styled';
import styled from 'styled-components';
import { planets_sizes } from 'assets/planets_sizes';
import { Link } from 'react-router-dom';

export const DivInfo = styled.section`
  display: grid;
  justify-items: center;

  @media ${device.tablet} {
    padding-top: calc(54rem / 16);
  }

  @media ${device.desktop} {
    display: flex;
    width: 1110px;
    flex-direction: row;
    margin-top: calc(129rem / 16);
    justify-content: space-between;
  }

  @media ${device.desktopL} {
    padding-top: 3rem;
  }
`;

export const ImgContainer = styled.div`
  min-height: calc(256rem / 16);
  display: flex;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    margin-bottom: calc(37rem / 16);
    min-height: calc(422rem / 16);
  }

  @media ${device.desktop} {
    flex-grow: 1;
    width: ${props => planets_sizes[props.ind].sizeS}px;
    width: fit-content;
  }

  @media ${device.desktopL} {
    flex-grow: 0.54;
  }
`;

export const ImgPlanet = styled.img`
  width: ${props => planets_sizes[props.ind].sizeS}px;
  height: ${props => planets_sizes[props.ind].sizeS}px;
  z-index: -1;
  position: relative;

  @media ${device.tablet} {
    width: ${props => planets_sizes[props.ind].sizeM}px;
    height: ${props => planets_sizes[props.ind].sizeM}px;
    z-index: 0;
  }

  @media ${device.desktop} {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => planets_sizes[props.ind].size}px;
    height: ${props => planets_sizes[props.ind].size}px;
  }

  @media ${device.desktopL} {
    transform: translate(-50%, -50%);
    width: ${props => planets_sizes[props.ind].sizeL}px;
    height: ${props => planets_sizes[props.ind].sizeL}px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 4.313rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 43.0625rem;
  }

  @media ${device.desktop} {
    display: block;
  } ;
`;

export const TextSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.mobile} {
    margin-bottom: calc(10rem / 16);
  }

  @media ${device.desktop}, ${device.tablet} {
    display: block;
  }

  @media ${device.tablet} {
    max-width: 21.1875rem;
    margin-bottom: calc(27rem / 16);
  }
`;

export const NamePlanet = styled.h2`
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 2.5;
  line-height: 1.38;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media ${device.desktop} {
    font-size: 5rem;
  } ;
`;

export const InfoText = styled.p`
  font-family: 'Spartan';
  font-size: 0.69rem;
  line-height: 1.38rem;

  @media ${device.mobile} {
    text-align: center;
    min-height: calc(132rem / 16);
    display: flex;
    align-items: center;
  }

  @media ${device.tablet} {
    text-align: start;
    margin-bottom: 2rem;
    min-height: 6.875rem;
  }

  @media ${device.desktop} {
    text-align: start;
    margin-top: 1.4375rem;
    font-size: 0.875rem;
    line-height: 1.563rem;
    margin-bottom: 1.4375rem;
    max-width: 21.88rem;
    min-height: 9.375rem;
  } ;
`;

export const SourseDiv = styled.p`
  font-size: 0.75rem;
  line-height: 1.563rem;
  font-family: 'Spartan';
  opacity: 0.5;

  @media ${device.tablet} {
    font-size: 0.88rem;
  }

  @media ${device.desktop} {
    margin-bottom: 2.4375rem;
  }
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
  flex-direction: row;
  margin-top: 1.25rem;
  gap: 2.688rem;

  @media ${device.tablet} {
    gap: 1rem;
    margin-top: 0;
  }

  @media ${device.desktop}, ${device.tablet} {
    flex-direction: column;
    gap: 1rem;
  } ;
`;

export const ButtonItem = styled.li`
  @media ${device.mobile} {
    margin-bottom: 1rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  color: var(--white);
  cursor: pointer;
  font-family: 'Spartan';
  font-weight: 700;
  text-transform: uppercase;
  width: 21.88rem;
  height: 3rem;
  background-color: ${props => props.bkgColor};
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.563rem;
  letter-spacing: 0.19rem;

  @media ${device.tablet} {
    width: 17.56rem;
    height: 2.5rem;
    font-size: 0.56rem;
  }

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

export const LinkArticle = styled(Link)`
  color: var(--white);
  cursor: pointer;
  font-family: 'Spartan';
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.56rem;
  line-height: 0.63rem;
  letter-spacing: 0.13rem;
  opacity: 0.5;
`;

export const LinkArticleActive = styled(LinkArticle)`
  opacity: 1;
  border-bottom: calc(4rem / 16) solid ${props => props.bkgColor};
`;
