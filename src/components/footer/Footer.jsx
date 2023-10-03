import './footer.css';
import {FaYoutube , FaInstagram , FaTiktok , FaTwitter , FaSpotify , FaApple , FaTwitch , FaFacebook , FaDiscord , FaTrailer , FaHeadphones} from 'react-icons/fa';
const Footer = () => (
    <div className={'stereo_footer'}>
        <div className={'stereo_footer_splitter'}/>
        <div className={'stereo_footer_links'}>
            <div className={'stereo_footer_links_us'}>
                <ul>
                    <li>About My Stereo</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className={'stereo_footer_links_terms'}>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className={'stereo_footer_links_email'}>
                <h2>My Stereo News</h2>
                <p>Don't miss a thing, stay up to date with the latest news from us.</p>
                <form>
                    <input placeholder={'Enter E-mail'} name={'email'}/>
                    <button  style={{padding:'.2rem 2rem'}} type={"submit"}>→</button>
                </form>
            </div>
        </div>
        <div className={'stereo_footer_splitter'}/>
        <div className={'stereo_footer_copyRight'}>
            <p>2011 - 2023 © Monstercat, All Rights Reserved <br/> This Shit developed By MOHSEN</p>
            <div>
                <FaYoutube color={'#fdfdfd'} title={'My Stereo on Youtube'} size={22} style={{margin:'0 .25rem'}}/>
                <FaInstagram color={'#fdfdfd'} title={'My Stereo on Instagram'} size={22} style={{margin:'0 .25rem'}}/>
                <FaTiktok color={'#fdfdfd'} title={'My Stereo on tiktok'} size={22} style={{margin:'0 .25rem'}}/>
                <FaTwitter color={'#fdfdfd'} title={'My Stereo on Twitter'} size={22} style={{margin:'0 .25rem'}}/>
                <FaSpotify color={'#fdfdfd'} title={'My Stereo on Spotify'} size={22} style={{margin:'0 .25rem'}}/>
                <FaApple color={'#fdfdfd'} title={'My Stereo on Apple Music'} size={22} style={{margin:'0 .25rem'}}/>
                <FaTwitch color={'#fdfdfd'} title={'My Stereo on Twitch'} size={22} style={{margin:'0 .25rem'}}/>
                <FaFacebook color={'#fdfdfd'} title={'My Stereo on Facebook'} size={22} style={{margin:'0 .25rem'}}/>
                <FaDiscord color={'#fdfdfd'} title={'My Stereo on Discord'} size={22} style={{margin:'0 .25rem'}}/>
                <FaTrailer color={'#fdfdfd'} title={'My Stereo on Trailer'} size={22} style={{margin:'0 .25rem'}}/>
                <FaHeadphones color={'#fdfdfd'} title={'My Stereo Player'} size={22} style={{margin:'0 .25rem'}}/>
            </div>
        </div>
        <div className={'stereo_footer_noIdea'}>
            <p>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples,
                including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh)
                and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.<br/><br/>
                We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA
                team live and work.
            </p>
        </div>
    </div>
)

export default Footer