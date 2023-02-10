import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <h1>the planets</h1>
      <nav>
        <NavLink to={'/mercury'}>mercury</NavLink>
        <NavLink to={'/venus'}>venus</NavLink>
        <NavLink to={'/earth'}>earth</NavLink>
        <NavLink to={'/mars'}>mars</NavLink>
        <NavLink to={'/jupiter'}>jupiter</NavLink>
        <NavLink to={'/saturn'}>saturn</NavLink>
        <NavLink to={'/uranus'}>uranus</NavLink>
      </nav>
    </>
  );
}
