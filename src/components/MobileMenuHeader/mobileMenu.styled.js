import styled from 'styled-components';

export const NavMobileItem = styled.span`
  display: inline-block;
  width: calc(20rem / 16);
  height: calc(20rem / 16);
  border-radius: 50%;
  background-color: ${props => props.color};
`;
export const BurgerButton = styled.button`
  position: fixed;
  width: 24px;
  height: 17px;
  left: 90%;
  top: 25px;
  display: flex;
  gap: 4px;
  border: none;
  background-color: transparent;
  flex-direction: column;
`;

export const BurgerBars = styled.span`
  background: white;
  width: 24px;
  height: 3px;

  &.active {
    background: #a90000;
  }
`;

export const ItemList = styled.ul`
  font-family: Spartan;
  font-size: 0.6875rem;
  line-height: 1.5625rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  opacity: 0.75;
  font-weight: 700;
  display: flex;
  transition: all 0s;
  text-align: start;
  flex-direction: column;
  margin-top: 0;
`;

export const BmItem = styled.li`
  padding-top: calc(20rem / 16);
  padding-bottom: calc(20rem / 16);
  border-bottom: 0.088px solid rgba(225, 225, 225, 0.5);
`;

export const BmItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
`;

export const BmItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: calc(24rem / 16);
`;
