import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  gap: 2.0625rem;
  align-items: center;
`;

export const LinkNav = styled(NavLink)`
  font-family: 'Spartan';
  font-size: 0.6875rem;
  line-height: 1.5625rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  opacity: 0.75;
  font-weight: 700;
`;

export const LinkHeadline = styled(NavLink)`
  text-transform: uppercase;
  font-family: 'Antonio';
  font-size: 1.75rem;
  line-height: 2.25rem;
  margin: 0;
`;

export const SpanHr = styled.span`
  width: 100vw;
  border-bottom: solid 0.0625rem rgba(255, 255, 255, 0.2);
`;
