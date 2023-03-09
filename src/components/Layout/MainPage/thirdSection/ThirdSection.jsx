import Button from '../../../UI/button/Button';
import Card from '../../../UI/card/Card';
import TextTitle from '../../../UI/texttitle/TextTitle';
import style from './ThirdSection.module.css'
import keepitreal from '../../../../assets/icons/keepitreal.png'
import digilab from '../../../../assets/icons/digilab.png'
import gravityOne from '../../../../assets/icons/gravityOne.png'
import juania from '../../../../assets/icons/juanie.png'
import blueWhile from '../../../../assets/icons/blueWhile.png'
import mrFox from '../../../../assets/icons/mrFox.png'
import shroomie from '../../../../assets/icons/shroomie.png'
import robotica from '../../../../assets/icons/robotica.png'
import rustyRobot from '../../../../assets/icons/rustyRobot.png'
import animaked from '../../../../assets/imgs/animaked.png'
import dotgu from '../../../../assets/icons/dotgu.png'
import ghiblier from '../../../../assets/icons/ghiblier.png'


const data = {
  title: 'Top creators',
  text: 'Checkout Top Rated Creators on the NFT Marketplace'
}

const creatorsData = [
  {
    id: '1',
    avatar: keepitreal,
    name: 'Keepitreal',
    totalSales: '34.53 ETH',
  },
  {
    id: '2',
    avatar: digilab,
    name: 'DigiLab',
    totalSales: '34.53 ETH',
  },
  {
    id: '3',
    avatar: gravityOne,
    name: 'GravityOne',
    totalSales: '34.53 ETH',
  },
  {
    id: '4',
    avatar: juania,
    name: 'Juanie',
    totalSales: '34.53 ETH',
  },
  {
    id: '5',
    avatar: blueWhile,
    name: 'BlueWhale',
    totalSales: '34.53 ETH',
  },
  {
    id: '6',
    avatar: mrFox,
    name: 'Mr fox',
    totalSales: '34.53 ETH',
  },
  {
    id: '7',
    avatar: shroomie,
    name: 'Shroomie',
    totalSales: '34.53 ETH',
  },
  {
    id: '8',
    avatar: robotica,
    name: 'Robotica',
    totalSales: '34.53 ETH',
  },
  {
    id: '9',
    avatar: rustyRobot,
    name: 'RustyRobot',
    totalSales: '34.53 ETH',
  },
  {
    id: '10',
    avatar: animaked,
    name: 'animakid',
    totalSales: '34.53 ETH',
  },
  {
    id: '11',
    avatar: dotgu,
    name: 'Dotgu',
    totalSales: '34.53 ETH',
  },
  {
    id: '12',
    avatar: ghiblier,
    name: 'Ghiblier',
    totalSales: '34.53 ETH',
  },
]

const ThirdSection = () => {
  return (
    <div className={style.section}>
      <div className={style.creators}><TextTitle title={data.title} text={data.text}/> <Button className={style.button}>View Rankings</Button></div>
      <div className={style.topCreators}>
        {creatorsData.map(item => {
          return <Card className={style.infoCreators} key={item.id}>
            <span>{item.id}</span>
            <img src={item.avatar} alt="avatar" className={style.avatar}/>
            <p>{item.name}</p>
            <span className={style.totalSales}>Total Sales:</span><span className={style.amount}>{item.totalSales}</span>
          </Card>
        })}
      </div>
    </div>
  )
}

export default ThirdSection;
