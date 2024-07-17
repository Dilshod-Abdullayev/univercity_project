import { FaPhoneAlt } from "react-icons/fa";
export default function Header() {
  return (
    <div className="header">
      <h1>Грант и контрактное обучение в <span>зарубежных</span> вузах</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
      <button className="contact-btn"><FaPhoneAlt /> Связаться с нами</button>
    </div>
  )
}
