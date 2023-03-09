import TextTitle from '../../../UI/texttitle/TextTitle';
import style from './SecondSection.module.css'
import dog from '../../../../assets/imgs/cuteDog.png'
import cat from '../../../../assets/imgs/cat-img.png'
import beat from '../../../../assets/imgs/beat-img.png'
import number from '../../../../assets/imgs/number-img.png'
import mushroom1 from '../../../../assets/imgs/mushrooms1.png'
import mushroom2 from '../../../../assets/imgs/mushrooms2.png'
import mushroom3 from '../../../../assets/imgs/mushrooms3.png'
import disco1 from '../../../../assets/imgs/disco.png'
import disco2 from '../../../../assets/imgs/disco2.png'
import disco3 from '../../../../assets/imgs/disco3.png'
import mrFox from '../../../../assets/icons/mrFox.png'
import shroomie from '../../../../assets/icons/shroomie.png'
import beKindRobot from '../../../../assets/icons/beKindRobot.png'
import CollectName from '../../../UI/collectName/CollectName';



const data = {
  title: 'Trending Collection',
  text: 'Checkout our weekly updated trending collection.',
}

const trendingData = [
  {
    id:'el1',
    mainImg: dog,
    firstAva: cat,
    secondAva: beat,
    thirdAva: number,
    title: 'DSGN Animals',
    icon: mrFox,
    name: 'MrFox',
  },
  {
    id: 'el2',
    mainImg: mushroom1,
    firstAva: mushroom2,
    secondAva: mushroom3,
    thirdAva: number,
    title: 'Magic Mushrooms',
    icon: shroomie,
    name: 'Shroomie',
  },
  {
    id: 'el3',
    mainImg: disco1,
    firstAva: disco2,
    secondAva: disco3,
    thirdAva: number,
    title: 'Disco Machines',
    icon: beKindRobot,
    name: 'BeKind2Robots',
  },
]




const SecondSection = () => {
  return (
    <>
      <TextTitle title={data.title} text={data.text}/>
       <div className={style.container}>
        {trendingData.map(item => (
          <div key={item.id}>
            <img src={item.mainImg} alt="img-dog" className={style.mainImg} />
            <div className={style.avatars}>
              <img src={item.firstAva} alt="firstAva" />
              <img src={item.secondAva} alt="secondAva" id={style.middleImg}/>
              <img src={item.thirdAva} alt="thirdAva" />
            </div>
             <CollectName title={item.title} icon={item.icon} name={item.name}/>
          </div>
        ))}
       </div>
    </>
  )
}

export default SecondSection;

