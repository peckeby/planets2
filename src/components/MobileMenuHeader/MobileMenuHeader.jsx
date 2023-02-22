import { useState } from 'react';
import { LinkHeadline, NavBar, SpanHr } from 'components/Header/Header.styled';
import {
  Bar,
  MenuCollapsed,
  MenuExpanded,
  MobileLinkNav,
  NavItem,
  NavMobileItem,
} from './mobileMenu.styled';

export const MobileMenuHeader = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    document.body.style.overflowY = isActive ? 'hidden' : 'scroll';
    setActive(!isActive);
  };

  return (
    <>
      <header>
        <LinkHeadline to="/" onClick={handleToggle}>
          the planets
        </LinkHeadline>
        <Bar onClick={handleToggle} />
        <>
          {isActive ? (
            <MenuCollapsed onClick={handleToggle} />
          ) : (
            <MenuExpanded onClick={handleToggle}>
              <NavBar>
                <NavItem>
                  <NavMobileItem color={'#419EBB'} />
                  <MobileLinkNav
                    to={'/mercury'}
                    overlinecolor={'#419EBB'}
                    onClick={handleToggle}
                  >
                    mercury
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#EDA249'} />
                  <MobileLinkNav
                    to={'/venus'}
                    overlinecolor={'#EDA249'}
                    onClick={handleToggle}
                  >
                    venus
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#6D2ED5'} />
                  <MobileLinkNav
                    to={'/earth'}
                    overlinecolor={'#6D2ED5'}
                    onClick={handleToggle}
                  >
                    earth
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#D14C32'} />
                  <MobileLinkNav
                    to={'/mars'}
                    overlinecolor={'#D14C32'}
                    onClick={handleToggle}
                  >
                    mars
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#D83A34'} />
                  <MobileLinkNav
                    to={'/jupiter'}
                    overlinecolor={'#D83A34'}
                    onClick={handleToggle}
                  >
                    jupiter
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#CD5120'} />
                  <MobileLinkNav
                    to={'/saturn'}
                    overlinecolor={'#CD5120'}
                    onClick={handleToggle}
                  >
                    saturn
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#1EC1A2'} />
                  <MobileLinkNav
                    to={'/uranus'}
                    overlinecolor={'#1EC1A2'}
                    onClick={handleToggle}
                  >
                    uranus
                  </MobileLinkNav>
                </NavItem>
                <NavItem>
                  <NavMobileItem color={'#2D68F0'} />
                  <MobileLinkNav
                    to={'/neptune'}
                    overlinecolor={'#2D68F0'}
                    onClick={handleToggle}
                  >
                    neptune
                  </MobileLinkNav>
                </NavItem>
              </NavBar>
            </MenuExpanded>
          )}
        </>
      </header>
      <SpanHr />
    </>
  );
};
