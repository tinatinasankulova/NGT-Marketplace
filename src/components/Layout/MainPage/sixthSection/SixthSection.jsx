import style from './SixthSection.module.css'
import mushroom from '../../../../assets/imgs/mushroom-main.png'
import Button from '../../../UI/button/Button';
import Card from '../../../UI/card/Card';

const SixthSection = () => {
  return (
    <div className={style.contai}>
      <div className={style.mainMushroom}>
      </div>
      <div className={style.mgc_mushroom}>
        <Button className={style.button}>Shroomie</Button>
        <div className={style.mshrm_time}>
          <div className={style.magic}>
            <h1>Magic Mashrooms</h1>
            <Button className={style.btn}>See NFT</Button>
          </div>
          <Card className={style.action}>
            <h4>Auction ends in:</h4>
            <div className={style.hour}>
            <p>59 </p> :
            <p>59 </p> :
            <p>59 </p>
            </div>
            <div className={style.descripTime}>
            <span id={style.hours}>Hours</span>
            <span id={style.minutes}>Minutes</span>
            <span>Seconds</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SixthSection;

