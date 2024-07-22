import image from '../../assets/images/univercity1.png'
import image2 from '../../assets/images/student1.png'

export default function Univercity() {
  return (
    <div>
      <div className="univercity_component mini_title">
        <h1>Университеты</h1>
        <h2>В нашем каталоге вы найдете более 100 университетов из более чем 14 стран</h2>
        <div className="univercity__boxs">
          <div className="univercity__box">
            <img src={image} alt="" />
            <p>Россия</p>
          </div>
          <div className="univercity__box">
            <img src={image} alt="" />
            <p>Россия</p>
          </div>
          <div className="univercity__box">
            <img src={image} alt="" />
            <p>Россия</p>
          </div>
          <div className="univercity__box">
            <img src={image} alt="" />
            <p>Россия</p>
          </div>
        </div>
      </div>
      <div className="student__comments">
        <h1>Отзывы о наших студентах</h1>
        <div className="student__comment_box">
          <img src={image2} />
          <h1>Александр Иванов</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
        </div>
      </div>
    </div>
  )
}
