import style from './FifthSection.module.css'
import TextTitle from '../../../UI/texttitle/TextTitle';
import distantGalaxy from '../../../../assets/imgs/distantGalaxy.png'
import lifeOnEdena from '../../../../assets/imgs/lifeOnEdena.png'
import astroFiction from '../../../../assets/imgs/astroFiction.png'
import moonDancer from '../../../../assets/imgs/moonDancer.png'
import nebulakid from '../../../../assets/imgs/nebukalid.png'
import spaceOne from '../../../../assets/icons/dotgu.png'
import CollectName from '../../../UI/collectName/CollectName';
import Card from '../../../UI/card/Card';
import { Fragment } from 'react';

const data = {
  title: 'Discover More NFTs',
  text: 'Explore new trending NFTs'
}

const discoverData = [
  {
    id: '1',
    img: distantGalaxy,
    title: 'Distant Galaxy',
    icon: moonDancer,
    name: 'MoonDancer',
    price: '1.63 ETH',
    higgestBid: '0.33 wETH'
  },
  {
    id: '2',
    img: lifeOnEdena,
    title: 'Life On Edena',
    icon: nebulakid,
    name: 'NebulaKid',
    price: '1.63 ETH',
    higgestBid: '0.33 wETH'
  },
  {
    id: '3',
    img: astroFiction,
    title: 'AstroFiction',
    icon: spaceOne,
    name: 'Spaceone',
    price: '1.63 ETH',
    higgestBid: '0.33 wETH'
  },
]


const FifthSection = () => {
  return (
    <Fragment>
      <TextTitle title={data.title} text={data.text} className={style.textTitle}/>
       <div className={style.discover}>
        {discoverData.map(item => (
          <Card key={item.id} className={style.card}>
            <img src={item.img} alt="icon" />
            <CollectName title={item.title} icon={item.icon} name={item.name} className={style.collectName}/>
            <div className={style.price}>
              <div className={style.prc}>
                <span>Price</span>
                <span id={style.amountPrise}>{item.price}</span>
              </div>
              <div className={`${style.prc + ' ' + style.prc2}`}>
              <span>Highest Bid</span>
              <span id={style.amountPrise}>{item.higgestBid}</span>
              </div>
            </div>
          </Card>
        ))}
       </div>
    </Fragment>
  )
}

export default FifthSection;