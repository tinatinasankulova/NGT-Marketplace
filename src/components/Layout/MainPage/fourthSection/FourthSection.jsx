import style from './FourthSection.module.css'
import art from '../../../../assets/imgs/art.png'
import collectibles from '../../../../assets/imgs/collectibles.png'
import music from '../../../../assets/imgs/music.png'
import photography from '../../../../assets/imgs/photography.png'
import video from '../../../../assets/imgs/video.png'
import utility from '../../../../assets/imgs/utility.png'
import sport from '../../../../assets/imgs/sport.png'
import virtualWorld from '../../../../assets/imgs/virtualWorld.png'
import PainBrush from '../../../../assets/icons/PaintBrush.png'
import Swatches from '../../../../assets/icons/Swatches.png'
import MusicNotes from '../../../../assets/icons/MusicNotes.png'
import Camera from '../../../../assets/icons/Camera.png'
import VideoCamera from '../../../../assets/icons/VideoCamera.png'
import MagicWand from '../../../../assets/icons/MagicWand.png'
import Basketball from '../../../../assets/icons/Basketball.png'
import Planet from '../../../../assets/icons/Planet.png'
import Card from '../../../UI/card/Card'
import { Fragment } from 'react'

const data = [
  {
    id:'1',
    background: art,
    icon: PainBrush,
    name: 'Art',
  },
  {
    id:'2',
    background: collectibles,
    icon: Swatches,
    name: 'Collectibles',
  },
  {
    id:'3',
    background: music,
    icon: MusicNotes,
    name: 'Music',
  },
  {
    id:'4',
    background: photography,
    icon: Camera,
    name: 'Photography',
  },
  {
    id: '5',
    background: video,
    icon: VideoCamera,
    name: 'Video',
  },
  {
    id:'6',
    background: utility,
    icon: MagicWand,
    name: 'Utility',
  },
  {
    id:'7',
    background: sport,
    icon: Basketball,
    name: 'Sport',
  },
  {
    id:'8',
    background: virtualWorld,
    icon: Planet,
    name: 'Virtual Worlds',
  },
]



const FourthSection = () => {
  return (
    <Fragment>
      <h1 className={style.browse}>Browse Categories</h1>
      <div className={style.categories}>
        {data.map(item => (
          <Card key={item.id} className={style.card}>
            <img id={style.backgroundImg} src={item.background} alt="background-img" />
            <img src={item.icon} alt="icon" id={style.icon}/>
            <h2 className={style.itemName}>{item.name}</h2> 
          </Card>
        ))}
      </div>
    </Fragment>
  )
}

export default FourthSection;