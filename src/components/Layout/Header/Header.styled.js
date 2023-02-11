import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LinkNav = styled(NavLink)`
  font-family: 'Spartan';
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
`;
