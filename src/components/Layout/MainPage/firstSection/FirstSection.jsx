import Button from '../../../UI/button/Button';
import Card from '../../../UI/card/Card';
import style from './FirstSection.module.css'
import space from '../../../../assets/imgs/space-walking.png'
import CollectName from '../../../UI/collectName/CollectName';
import animakid from '../../../../assets/imgs/animaked.png'
const data = [
  {
    id: 'el1',
    amount: '240k+ ',
    totalSale: 'Total Sale',
  },
  {
    id: 'el2',
    amount: '100k+',
    totalSale: 'Auctions',
  },
  {
    id: 'el3',
    amount: '240k+',
    totalSale: 'Artists'
  }
]
const collect = [
  {
    id: 'el1',
    title: 'Space Walking',
    icon: animakid,
    name: 'Animakid'
  }
]

const FirstSection = () => {
  return (
    <section className={style.firstSection}>
      <div className={style.digitalArt}>
        <h1>Discover <br /> digital art & Collect NFTs</h1>
        <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.  </p>
        <Button className={style.button}>Get Started</Button>
        <div className={style.amount}>
           {data.map( el => (
          <div key={el.id} className={style.totalSale}>
            <h2>{el.amount}</h2>
            <p>{el.totalSale}</p>
          </div>
        ))}
        </div>
      </div>
       <Card className={style.card}>
        <img src={space} alt="space-walking" className={style.spaceImg} />
            {collect.map(el => (
           <CollectName key={el.id} title={el.title} icon={el.icon} name={el.name} className={style.collect}/>
            ))}
        </Card>
    </section>
  )
}


export default FirstSection;
