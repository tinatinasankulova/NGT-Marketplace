import style from './Footer.module.css'
import discordLogo from '../../assets/icons/DiscordLogo.png'
import youtubeLogo from '../../assets/icons/youtubeLogo.png'
import twitterLogo from '../../assets/icons/TwitterLogo.png'
import instagramLogo from '../../assets/icons/InstagramLogo.png'

const Footer = () => {
  return (
    <footer>
        <div>
          <h2>NFT Marketplace</h2>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div>
          <img src={discordLogo} alt="discordLogo" />
          <img src={youtubeLogo} alt="youtubeLogo" />
          <img src={twitterLogo} alt="twitterLogo" />
          <img src={instagramLogo} alt="instagramLogo" />
          </div>
        </div>
        
    </footer>
  )
}

export default Footer;