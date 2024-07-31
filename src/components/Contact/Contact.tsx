import ContactForm from './ContactForm'
import image from '../../assets/images/contact_left.png'
export default function Contact() {
    return (
        <div className='contactcomponent'>
            <img src={image} />
            <ContactForm />
        </div>
    )
}
