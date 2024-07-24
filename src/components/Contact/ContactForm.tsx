import { FaUser, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {

    return (
        <div className='contactForm'>
            <h1>Связатся с нами</h1>
            <p>
                Оставьте свои данные и наш специалист обязательно свяжемся с Вами в течение дня</p>
            <form>
                <div>
                    <FaUser />  <input type="text" placeholder='Имя' />
                </div>
                <div>
                    <FaPhoneAlt />  <input type="text" placeholder='Имя' />
                </div>
                <div>
                    <FaCommentDots />  <input type="text" placeholder='Дополнительные комментарии' />
                </div>
            </form>
        </div>
    )
}
