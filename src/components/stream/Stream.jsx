import {FaBandcamp , FaSoundcloud , FaApple , FaYoutube , FaSpotify  , FaHeadphones} from 'react-icons/fa';
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import './stream.css';


const Company = ({logo , company , isText=false}) => {

    const [hover , setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    return(
        <AnimatePresence >
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={"stereo_stream_logos_player"}>
            {hover && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}>
                <p>stream on {company}</p>
            </motion.div>}
            {logo}
            {isText && <p className={"player"}>player</p>}
        </div>
        </AnimatePresence>
    )
}
const Stream = () => {



    return(
        <div className={'stereo_stream'}>
            <h1 className={'titles'} style={{marginBottom:'1rem'}}>Stream it your way</h1>
            <div className={'stereo_stream_logos'}>
                <Company logo={<FaHeadphones size={21} className={'logo'} color={'#fdfdfd'}/>} company={'my stereo'} isText={true} />
                <Company logo={<FaBandcamp  size={21} className={'logo'} color={'#fdfdfd'}/>} company={'bandcamp'} />
                <Company logo={<FaSoundcloud size={21} className={'logo'} color={'#fdfdfd'}/>} company={'soundcloud'} />
                <Company logo={<FaApple size={21}  className={'logo'} color={'#fdfdfd'}/>} company={'apple music'} />
                <Company logo={<FaYoutube size={21} className={'logo'} color={'#fdfdfd'}/>} company={'youtube'} />
                <Company logo={<FaSpotify size={21} className={'logo'} color={'#fdfdfd'}/> } company={'spotify'} />
            </div>
        </div>
    )
}

export default Stream;