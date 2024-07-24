import ContactForm from './ContactForm'
import image from '../../assets/images/contact_left.png'
export default function Contact() {
    return (
        <div className='contact'>
            <img src={image} />
            <ContactForm />
        </div>
    )
}
