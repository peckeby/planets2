import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 27px;
  padding: 22px 40px 27px 31px;
`;

export const NavBar = styled.div`
  display: flex;
  gap: 33px;
  align-items: center;
`;

export const LinkNav = styled(NavLink)`
  font-family: 'League Spartan';
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const SpanHr = styled.div`
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
`;
