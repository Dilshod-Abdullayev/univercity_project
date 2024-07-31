import img1 from '../../assets/images/about1.png'
import img2 from '../../assets/images/about2.png'
import img3 from '../../assets/images/about3.png'
import img4 from '../../assets/images/about4.png'
import img5 from '../../assets/images/about5.png'
import img6 from '../../assets/images/about6.png'


export default function AboutServise() {
    return (
        <div className='about_servise'>
            <h1>Услуги</h1>
            <p>Мы предлагаем нашим клиентам следующие услуги:</p>
            <div className="about_servise_boxs">
                <div className="about_servise_box">
                    <img src={img1} alt="" />
                    <p>Поступление в 
                    зарубежные ВУЗы</p>
                </div>
                <div className="about_servise_box">
                    <img src={img2} alt="" />
                    <p>Оформление всех документов для поступления</p>
                </div>
                <div className="about_servise_box">
                    <img src={img3} alt="" />
                    <p>Помощь в оформлении и получении визы</p>
                </div>
                <div className="about_servise_box">
                    <img src={img4} alt="" />
                    <p>Организация переезда и размещения студента</p>
                </div>
                <div className="about_servise_box">
                    <img src={img5} alt="" />
                    <p>Организация языковых курсов и туристических поездок</p>
                </div>
                <div className="about_servise_box">
                    <img src={img6} alt="" />
                    <p>Оформление и перевод документов на 
                    иностранный язык</p>
                </div>
            </div>
        </div>
    )
}
