import { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { LinkHeadline, SpanHr } from 'components/Header/Header.styled';
import { styles } from 'assets/mobileMenuStyles';
import {
  BmItem,
  BmItemContent,
  BmItemDiv,
  BurgerBars,
  BurgerButton,
  ItemList,
  NavMobileItem,
} from './mobileMenu.styled';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/path-icon.svg';

const MyContext = createContext();

const MyProvider = props => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => {
          setMenuOpenState(!menuOpenState);
          document.body.style.overflow = menuOpenState ? 'auto' : 'hidden';
        },
        closeMenu: () => setMenuOpenState(false),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export const Button = () => {
  const ctx = useContext(MyContext);
  return (
    <BurgerButton onClick={ctx.toggleMenu}>
      <BurgerBars />
      <BurgerBars />
      <BurgerBars />
    </BurgerButton>
  );
};

const Navigation = () => {
  const ctx = useContext(MyContext);

  return (
    <>
      <LinkHeadline to="/" onClick={ctx.closeMenu}>
        the planets
      </LinkHeadline>
      <SpanHr />
      <Menu
        width="100%"
        styles={styles}
        customBurgerIcon={false}
        isOpen={ctx.isMenuOpen}
        onStateChange={state => ctx.stateChangeHandler(state)}
      >
        <ItemList>
          <Link
            to={'/mercury'}
            overlinecolor={'#419EBB'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#419EBB'} />
                  mercury
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link
            to={'/venus'}
            overlinecolor={'#EDA249'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#EDA249'} />
                  venus
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link
            to={'/earth'}
            overlinecolor={'#6D2ED5'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#6D2ED5'} />
                  earth
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link to={'/mars'} overlinecolor={'#D14C32'} onClick={ctx.toggleMenu}>
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#D14C32'} />
                  mars
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link
            to={'/jupiter'}
            overlinecolor={'#D83A34'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#D83A34'} />
                  jupiter
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link
            to={'/saturn'}
            overlinecolor={'#CD5120'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#CD5120'} />
                  saturn
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link
            to={'/uranus'}
            overlinecolor={'#1EC1A2'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#1EC1A2'} />
                  uranus
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
          <Link
            to={'/neptune'}
            overlinecolor={'#2D68F0'}
            onClick={ctx.toggleMenu}
          >
            <BmItem>
              <BmItemContent>
                <BmItemDiv>
                  <NavMobileItem color={'#2D68F0'} />
                  neptune
                </BmItemDiv>
                <ReactSVG src={logo} />
              </BmItemContent>
            </BmItem>
          </Link>
        </ItemList>
      </Menu>
    </>
  );
};

const MobileMenuHeader = () => {
  return (
    <>
      <header>
        <MyProvider styles={styles}>
          <div>
            <Button />
            <Navigation />
          </div>
        </MyProvider>
      </header>
    </>
  );
};

export default MobileMenuHeader;
