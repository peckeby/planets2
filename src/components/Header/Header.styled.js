import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'assets/devices.styled';

export const NavBar = styled.ul`
  display: flex;
  gap: 2.0625rem;
  margin-top: 0;

  @media ${device.tablet} {
    max-width: calc(665rem / 16);
    justify-content: space-between;
  }

  @media ${device.desktop} {
  }
`;

export const NavBarItem = styled.li``;

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

  @media ${device.tablet} {
    &.active {
      border-bottom: 4px solid ${props => props.overlinecolor};
      padding-bottom: 1.8125rem;
    }
  }

  @media ${device.desktop} {
    padding-bottom: 0.7rem;
    padding-top: 1rem;
    border-top: 4px solid transparent;

    &.active {
      border-top: 4px solid ${props => props.overlinecolor};
    }
  }
`;

export const LinkHeadline = styled(NavLink)`
  margin-bottom: 2.438rem;
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 1.75rem;
  line-height: 2.25rem;
  text-align: center;

  @media ${device.mobile} {
    display: inline-block;
    padding-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  @media ${device.desktop} {
    margin: 0;
    padding: 0;
  }
`;

export const SpanHr = styled.span`
  width: 100vw;
  border-bottom: solid 0.0625rem rgba(255, 255, 255, 0.2);

  @media ${device.tablet} {
    position: absolute;
    z-index: -1;
    top: 9.9rem;
  }

  @media only ${device.mobile} {
    position: fixed;
    border-bottom: solid 0.0625rem rgba(255, 255, 255, 0.2);
    top: 68px;
  }
`;
