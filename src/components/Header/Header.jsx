import {
  NavBar,
  LinkNav,
  SpanHr,
  LinkHeadline,
  NavBarItem,
} from './Header.styled';

export default function Header() {
  return (
    <>
      <header>
        <LinkHeadline to="/">the planets</LinkHeadline>
        <nav>
          <NavBar>
            <NavBarItem>
              <LinkNav to={'/mercury'} overlinecolor={'#419EBB'}>
                {' '}
                mercury
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/venus'} overlinecolor={'#EDA249'}>
                venus
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/earth'} overlinecolor={'#6D2ED5'}>
                earth
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/mars'} overlinecolor={'#D14C32'}>
                mars
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/jupiter'} overlinecolor={'#D83A34'}>
                jupiter
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/saturn'} overlinecolor={'#CD5120'}>
                saturn
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/uranus'} overlinecolor={'#1EC1A2'}>
                uranus
              </LinkNav>
            </NavBarItem>
            <NavBarItem>
              <LinkNav to={'/neptune'} overlinecolor={'#2D68F0'}>
                neptune
              </LinkNav>
            </NavBarItem>
          </NavBar>
        </nav>
      </header>
      <SpanHr />
    </>
  );
}
