import { HeaderStyled, NavBar, LinkNav, SpanHr } from './Header.styled';

export default function Header() {
  return (
    <SpanHr>
      <HeaderStyled>
        <h1>the planets</h1>
        <NavBar>
          <LinkNav to={'/mercury'}>mercury</LinkNav>
          <LinkNav to={'/venus'}>venus</LinkNav>
          <LinkNav to={'/earth'}>earth</LinkNav>
          <LinkNav to={'/mars'}>mars</LinkNav>
          <LinkNav to={'/jupiter'}>jupiter</LinkNav>
          <LinkNav to={'/saturn'}>saturn</LinkNav>
          <LinkNav to={'/uranus'}>uranus</LinkNav>
        </NavBar>
      </HeaderStyled>
    </SpanHr>
  );
}
