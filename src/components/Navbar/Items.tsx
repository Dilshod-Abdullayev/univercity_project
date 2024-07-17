import { Link } from 'react-router-dom'
import { navItems } from '../../data/data'
export default function Items() {
  return (
    <ul>
      {
        navItems.map(item =>
          <li key={item.id}><Link to={item.path}>{item.text}</Link>
          </li>)
      }
    </ul>
  )
}
