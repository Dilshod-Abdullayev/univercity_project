import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

export default function ContactForm() {
    return (
        <div className='contact'>
            <div>
                <h1><FaPhone />Телефоны</h1>
                <a href='tel:+7 999 999 99 99'>+7 999 999 99 99</a>
                <a href='tel:+7 999 999 99 99'>+7 999 999 99 99</a>
            </div>
            <div>
                <h1><MdEmail />Электронная почта</h1>
                <a href='mailto:RbS1x@example.com'>RbS1x@example.com</a>
                
            </div>
            <div>
                <h1><FaClock />Время работы</h1>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: выходной</p>
            </div>
        </div>
    )
}
