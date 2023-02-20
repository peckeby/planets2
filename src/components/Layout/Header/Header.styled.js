import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'devices.styled';

export const NavBar = styled.ul`
  display: flex;
  gap: 2.0625rem;
  margin-top: 0;
  margin-bottom: 1.6875rem;

  @media ${device.desktop} {
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const LinkNav = styled(NavLink)`
  font-family: 'Spartan';
  font-size: 0.6875rem;
  line-height: 1.5625rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  opacity: 0.75;
  font-weight: 700;
  display: block;
  padding-top: 2.06rem;

  &:hover {
    opacity: 1;
  }

  &.active {
    border-top: 4px solid ${props => props.overLineColor};
    padding-top: 1.8125rem;
  }
`;

export const LinkHeadline = styled(NavLink)`
  margin-bottom: 2.438rem;
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 1.75rem;
  line-height: 2.25rem;
  text-align: center;

  @media ${device.desktop} {
    margin-top: 1.38rem;
    margin-bottom: 0;
  }
  @media ${device.tablet} {
  }
`;

export const SpanHr = styled.span`
  border-bottom: solid 0.0625rem rgba(255, 255, 255, 0.2);
`;
