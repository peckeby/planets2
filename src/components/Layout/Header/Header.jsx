import { NavBar, LinkNav, SpanHr, LinkHeadline } from './Header.styled';

export default function Header() {
  return (
    <>
      <header>
        <LinkHeadline to="/">the planets</LinkHeadline>
        <nav>
          <NavBar>
            <LinkNav to={'/mercury'} overLineColor={'#419EBB'}>
              mercury
            </LinkNav>
            <LinkNav to={'/venus'} overLineColor={'#EDA249'}>
              venus
            </LinkNav>
            <LinkNav to={'/earth'} overLineColor={'#6D2ED5'}>
              earth
            </LinkNav>
            <LinkNav to={'/mars'} overLineColor={'#D14C32'}>
              mars
            </LinkNav>
            <LinkNav to={'/jupiter'} overLineColor={'#D83A34'}>
              jupiter
            </LinkNav>
            <LinkNav to={'/saturn'} overLineColor={'#CD5120'}>
              saturn
            </LinkNav>
            <LinkNav to={'/uranus'} overLineColor={'#1EC1A2'}>
              uranus
            </LinkNav>
            <LinkNav to={'/neptune'} overLineColor={'#2D68F0'}>
              neptune
            </LinkNav>
          </NavBar>
        </nav>
      </header>
      <SpanHr />
    </>
  );
}
