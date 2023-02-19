import { NavBar, LinkNav, SpanHr, LinkHeadline } from './Header.styled';

export default function Header() {
  return (
    <>
      <header>
        <LinkHeadline to="/">the planets</LinkHeadline>
        <nav>
          <NavBar>
            <LinkNav to={'/mercury'}>mercury</LinkNav>
            <LinkNav to={'/venus'}>venus</LinkNav>
            <LinkNav to={'/earth'}>earth</LinkNav>
            <LinkNav to={'/mars'}>mars</LinkNav>
            <LinkNav to={'/jupiter'}>jupiter</LinkNav>
            <LinkNav to={'/saturn'}>saturn</LinkNav>
            <LinkNav to={'/uranus'}>uranus</LinkNav>
            <LinkNav to={'/neptune'}>neptune</LinkNav>
          </NavBar>
        </nav>
      </header>
      <SpanHr />
    </>
  );
}
