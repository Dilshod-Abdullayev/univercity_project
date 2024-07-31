import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Logo() {
  return <Link to={"/"}><img src={logo} alt="logo" /></Link>

}
