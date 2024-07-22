import image from '../../assets/images/education1.png'
export default function Education() {
    return (
        <div className="mini_title">
            <h2>Добро пожаловать в нашу группу иностранного образования</h2>
            <h1>Почему мы?</h1>
            <div className="education__boxs">
                <div className="education__box">
                    <img src={image} alt="" />
                    <p>Сертифицированные услуги нашей профессиональной команды</p>
                </div>
                <div className="education__box">
                    <img src={image} alt="" />
                    <p>Сертифицированные услуги нашей профессиональной команды</p>
                </div>
                <div className="education__box">
                    <img src={image} alt="" />
                    <p>Сертифицированные услуги нашей профессиональной команды</p>
                </div>

            </div>
        </div>
    )
}
