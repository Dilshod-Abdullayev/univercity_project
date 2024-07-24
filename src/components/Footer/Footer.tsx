import Application from "../Navbar/Application";
import Items from "../Navbar/Items";
import Logo from "../Navbar/Logo";
import NavSocials from "../Navbar/NavSocials";

export default function Footer() {
  return (
    <footer className="nav">
      <Logo />
      <Items />
      <NavSocials/>
    </footer>
  )
}