import styled from 'styled-components';
import { LinkNav } from 'components/Header/Header.styled';

export const MenuCollapsed = styled.div`
  transition: all 0.8s;
  cursor: pointer;
  position: relative;
  top: -44px;
  left: 87%;
  height: 20px;
  width: 27px;
  z-index: 1;
  ul {
    transition: all 0s;
    position: relative;
    right: -9000px;
  }
`;

export const Bar = styled.div`
  cursor: pointer;
  height: 3px;
  width: 27px;
  border-radius: 15px;
  background-color: var(--white);
  position: absolute;
  top: 33px;
  left: 87%;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 3px;
    width: 27px;
    border-radius: 15px;
    background-color: var(--white);
    top: -8px;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    height: 3px;
    width: 27px;
    border-radius: 15px;
    background-color: var(--white);
    top: 8px;
  }
`;

export const MenuExpanded = styled.div`
  transition: all 0.8s;
  position: fixed;
  z-index: 5;
  height: 100vh;
  width: 100vw;
  border-radius: 0px;
  top: 68px;
  left: 0;
  background-color: var(--main);
  ul {
    transition: all 0s;
    text-align: start;
    flex-direction: column;
    padding: calc(44rem / 16) calc(24rem / 16) calc(67rem / 16) calc(24rem / 16);
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: calc(25rem / 16);
  padding-bottom: calc(20rem / 16);
  border-bottom: 0.088px solid rgba(225, 225, 225, 0.5);
`;

export const NavMobileItem = styled.span`
  display: inline-block;
  width: calc(20rem / 16);
  height: calc(20rem / 16);
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const MobileLinkNav = styled(LinkNav)`
  display: inline;
  padding-top: 0;
`;
