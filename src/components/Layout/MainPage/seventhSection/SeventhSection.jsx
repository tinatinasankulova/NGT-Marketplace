import TextTitle from '../../../UI/texttitle/TextTitle';
import style from './SeventhSection.module.css'
import wallet from '../../../../assets/icons/Icon-wallet.png'
import colection from '../../../../assets/icons/Icon-collection.png'
import iconThierd from '../../../../assets/icons/Icon-3.png'
import Card from '../../../UI/card/Card';

const data = {
  title: 'How it works',
  text: 'Find out how to get started'
}

const infoData = [
  {
    id: '1',
    title: 'Setup Your wallet',
    describe: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    icon: wallet,
  },
  {
    id: '2',
    title: 'Create Collection',
    describe: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    icon: colection,
  },
  {
    id: '3',
    title: 'Start Earning',
    describe: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    icon: iconThierd,
  }
]


const SeventhSection = () => {
  return (
    <div>
    <div className={style.textTitle}>
        <TextTitle title={data.title} text={data.text} className={style.textTitle}/>
    </div>
    <div className={style.wrapper}>
      {infoData.map(item => (
        <Card key={item.id} className={style.card}>
            <img src={item.icon} alt="ivon-img" />
            <h2>{item.title}</h2>
              <p>{item.describe}</p>
        </Card>
      ))}
     
    </div>
    </div>
  )
}

export default SeventhSection;