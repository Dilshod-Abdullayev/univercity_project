import Logo from "../Navbar/Logo";
import NavSocials from "../Navbar/NavSocials";
import { navItems } from '../../data/data'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <ul>
        {
          navItems.map(item =>
            <li key={item.id}><Link to={item.path}>{item.text}</Link>
            </li>)
        }
      </ul>
      <NavSocials />
    </footer>
  )
}