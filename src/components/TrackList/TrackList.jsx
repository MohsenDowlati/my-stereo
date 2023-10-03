import songs from "../../utils/songs";
import {CiPlay1} from 'react-icons/ci';
import {GoShareAndroid} from 'react-icons/go';
import './trackList.css';

const SongField = ({song}) => (
    <div className={"stereo_trackList_song"}>
        <h3 className={"stereo_trackList_song_num"}>{song.id}</h3>
        <CiPlay1 color={"#fdfdfd"} size={32} className={"icon"} cursor={'pointer'}/>
        <div className={"stereo_trackList_song_title"}>
            <h3>{song.title}<br/><span>Conro</span></h3>
        </div>
        <h3 className={"stereo_trackList_song_time"}>{song.time}</h3>
        <GoShareAndroid color={"#fdfdfd"} size={32} className={'icon'} style={{marginRight:'2rem'}}/>
    </div>
)

const TrackList = () => (
    <div className={"stereo_trackList"}>
        <h1 className={"titles"}>Track List</h1>
        {
            songs.map((song, index)=>(
                <SongField song={song} key={index}/>
            ))
        }
    </div>
)

export default TrackList;
