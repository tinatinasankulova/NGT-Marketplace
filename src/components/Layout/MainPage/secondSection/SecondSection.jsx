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



const data = {
  title: 'Trending Collection',
  text: 'Checkout our weekly updated trending collection.',
}

const trendingData = [
  {
    mainImg: dog,
    firstAva: cat,
    secondAva: beat,
    thirdAva: number,
  },
  {
    mainImg: mushroom1,
    firstAva: mushroom2,
    secondAva: mushroom3,
    thirdAva: number,
  },
  {
    mainImg: disco1,
    firstAva: disco2,
    secondAva: disco3,
    thirdAva: number,
  },
]

const collectData = [
  {
    title: 'DSGN Animals',
    icon: mrFox,
    name: 'MrFox',
  },
  {
    title: 'Magic Mushrooms',
    icon: shroomie,
    name: 'Shroomie',
  },
  {
    title: 'Disco Machines',
    icon: beKindRobot,
    name: 'BeKind2Robots',
  },
] 


const SecondSection = () => {
  return (
    <>
      <TextTitle title={data.title} text={data.text}/>
       <div>
        
       </div>
    </>
  )
}

export default SecondSection;

