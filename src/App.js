import './App.css';
import {StickyNavbar , Header , Cookie , Stream , TrackList , MusicVideo , Footer} from "./components";
const App = () => (
    <div className={"stereo"}>
        <StickyNavbar/>
        <Header/>
        <Stream/>
        <TrackList/>
        <MusicVideo/>
        <Footer/>
        <Cookie/>

    </div>
)


export default App;
