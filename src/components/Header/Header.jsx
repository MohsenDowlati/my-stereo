import album from '../../assets/album.webp'
import './header.css';
import {CiPlay1} from 'react-icons/ci';
import {GoShareAndroid} from 'react-icons/go';
const Header = () => (
  <article style={{display:"flex"}}>
    <div className={"stereo_header_bg"}/>
    <div className={"stereo_header"}>
    <div className={"stereo_header_img"}>
      <p><span>Instinct</span> — Released May 22, 2020</p>
      <img src={album} alt={'Album'}/>
    </div>
    <div className={"stereo_header_info"}>
        <p>Level Days</p>
        <p>CONRO</p>
        <div className={"stereo_header_info_btn"}>
            <button><CiPlay1 size={22}/> LISTEN NOW</button>
            <button><GoShareAndroid size={22}/> SHARE</button>
        </div>

    </div>
    </div>
</article>
)

export default Header;