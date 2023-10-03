import './stickyNavbar.css';
import {FaHeadphones ,  FaInstagram , FaTiktok , FaTwitter , FaFacebook , FaDiscord} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import {useState} from "react";

const StickyNavbar = () => {

    const [toggleMenu , setToggleMenu] = useState(false);
    const [one , setOne] = useState(false);
    const [two , setTwo] = useState(false);
    const [three , setThree] = useState(false);
    const [four , setFour] = useState(false);

    return(
        <div className={'stereo_navbar'}>
            <FaHeadphones color={'rgb(80, 165, 132)'} size={40} style={{margin:'2.6rem'}} cursor={'pointer'} title={"My Stereo"}/>
            {toggleMenu &&
                <div className={'stereo_navbar_menu slide-in-right'}>
                    <div className={'stereo_navbar_menu_header'}>
                        <FaHeadphones color={'rgb(80, 165, 132)'} size={40}  cursor={'pointer'} title={"My Stereo"} style={{margin:'1.5rem'}}/>
                        <RxCross1 color={'#fdfdfd'} size={24} cursor={'pointer'} onClick={()=>setToggleMenu(false)} style={{margin:'1.5rem'}}/>
                    </div>
                    <div className={'stereo_navbar_menu_list'}>
                        <div>
                            <p onClick={()=>setOne(!one)}>Music {!one? <span>►</span> : <span>▼</span>}</p>
                            {one &&  <div className={'sub'}>
                                <p>our music</p>
                                <p>Instinct</p>
                                <p>uncaged</p>
                                <p>silk</p>
                            </div>}
                        </div>
                        <div>
                            <p>Artists</p>
                        </div>
                        <div>
                            <p onClick={()=>setTwo(!two)}>About {!two? <span>►</span> : <span>▼</span>}</p>
                            {two && <div className={'sub'}>
                                <p>About My Stereo</p>
                                <p>Diversity & Inclusion</p>
                                <p>Code of Ethics</p>
                                <p>Environmental</p>
                                <p>Contact Us</p>
                            </div>}
                        </div>
                        <div>
                            <p>News</p>
                        </div>
                        <div>
                            <p onClick={()=>setThree(!three)}>Events {!three? <span>►</span> : <span>▼</span>}</p>
                            {three && <div className={'sub'}>
                                <p>My Stereo Events Experience</p>
                                <p>Upcoming Events</p>
                            </div>}
                        </div>
                        <div>
                            <p onClick={()=>setFour(!four)}>Programming {!four? <span>►</span> : <span>▼</span>}</p>
                            {four && <div className={'sub'}>
                                <p>MonstercatTV</p>
                                <p>Call of the Wild</p>
                                <p>Silk Showcase</p>
                                <p>Upcoming Shows</p>
                            </div>}
                        </div>
                        <div>
                            <p>Gold</p>
                        </div>
                        <div>
                            <p>Partners</p>
                        </div>
                        <div>
                            <p>Press</p>
                        </div>
                        <div>
                            <p>Player</p>
                        </div>
                        <div>
                            <p>Shop</p>
                        </div>
                        <div>
                            <p>Lost Civilization</p>
                        </div>
                    </div>
                    <div className={'stereo_navbar_menu_footer'}>
                        <div>
                        <FaInstagram color={'#fdfdfd'} title={'My Stereo on Instagram'} size={22} style={{margin:'.2rem .5rem'}}/>
                        <FaTiktok color={'#fdfdfd'} title={'My Stereo on tiktok'} size={22} style={{margin:'.2rem .5rem'}}/>
                        <FaTwitter color={'#fdfdfd'} title={'My Stereo on Twitter'} size={22} style={{margin:'.2rem .5rem'}}/>
                        <FaFacebook color={'#fdfdfd'} title={'My Stereo on Facebook'} size={22} style={{margin:'.2rem .5rem'}}/>
                        <FaDiscord color={'#fdfdfd'} title={'My Stereo on Discord'} size={22} style={{margin:'.2rem .5rem'}}/>
                        <FaHeadphones color={'#fdfdfd'} title={'My Stereo Player'} size={22} style={{margin:'.2rem .5rem'}}/>
                        </div>
                        <div>
                            <button id={'one'}>sign in</button>
                            <button id={'two'}>or sign up</button>
                        </div>
                    </div>
                </div>
            }
            {!toggleMenu && <div className={'stereo_navbar_right'}>
                <GiHamburgerMenu color={'#fdfdfd'} size={28} style={{marginBottom:'2rem'}} cursor={'pointer'} onClick={()=>setToggleMenu(true)}/>
                <div>
                    <FaInstagram color={'#fdfdfd'} title={'My Stereo on Instagram'} size={22} style={{margin:'.5rem .3rem'}}/>
                    <FaTiktok color={'#fdfdfd'} title={'My Stereo on tiktok'} size={22} style={{margin:'.5rem .3rem'}}/>
                    <FaTwitter color={'#fdfdfd'} title={'My Stereo on Twitter'} size={22} style={{margin:'.5rem .3rem'}}/>
                    <FaFacebook color={'#fdfdfd'} title={'My Stereo on Facebook'} size={22} style={{margin:'.5rem .3rem'}}/>
                    <FaDiscord color={'#fdfdfd'} title={'My Stereo on Discord'} size={22} style={{margin:'.5rem .3rem'}}/>
                    <FaHeadphones color={'#fdfdfd'} title={'My Stereo Player'} size={22} style={{margin:'.5rem .3rem'}}/>
                </div>
            </div>}
        </div>
    );
}

export default StickyNavbar;