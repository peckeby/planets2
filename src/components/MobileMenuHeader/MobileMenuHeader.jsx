import s from './mobileMenu.module.scss';
import { useState } from 'react';
import {
  LinkHeadline,
  LinkNav,
  NavBar,
  SpanHr,
} from 'components/Header/Header.styled';

export const MobileMenuHeader = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header>
        <LinkHeadline to="/">the planets</LinkHeadline>
        <div
          className={isActive ? s.menu_expanded : s.menu_collapsed}
          onClick={handleToggle}
        >
          <div className={s.bar}></div>
          <NavBar>
            <ul>
              <li>
                <LinkNav to={'/mercury'} overlinecolor={'#419EBB'}>
                  mercury
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/venus'} overlinecolor={'#EDA249'}>
                  venus
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/earth'} overlinecolor={'#6D2ED5'}>
                  earth
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/mars'} overlinecolor={'#D14C32'}>
                  mars
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/jupiter'} overlinecolor={'#D83A34'}>
                  jupiter
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/saturn'} overlinecolor={'#CD5120'}>
                  saturn
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/uranus'} overlinecolor={'#1EC1A2'}>
                  uranus
                </LinkNav>
              </li>
              <li>
                <LinkNav to={'/neptune'} overlinecolor={'#2D68F0'}>
                  neptune
                </LinkNav>
              </li>
            </ul>
          </NavBar>
        </div>
      </header>
      <SpanHr />
    </>
  );
};
