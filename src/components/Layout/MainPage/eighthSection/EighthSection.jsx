import style from './EighthSection.module.css'
import spaceMan from '../../../../assets/icons/spaceMan.png'
import Card from '../../../UI/card/Card';
import Button from '../../../UI/button/Button';



const EighthSection = () => {
  return (
    <Card className={style.card}>
      <img src={spaceMan} alt="img" className={style.spaceMan} />
      <div className={style.digest}>
        <h1>Join our weekly digest</h1>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <div className={style.subscribe}>
          <input type="text"  placeholder='Enter your email here'/>
          <Button className={style.button}>Subscribe</Button>
        </div>
      </div>
    </Card>
  )
}

export default EighthSection;