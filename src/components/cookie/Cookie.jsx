import './cookie.css';
import useCookie from 'react-use-cookie';
import {useState} from "react";
const Cookie = () => {

    const [show , setShow] = useState('');
    const [userToken, setUserToken] = useCookie('token', '0');

    console.log(userToken);

    const handleReject = () => {
      setShow('none');
    }

    const handleAccept = () => {
      setUserToken('123');
      setShow('none');
    }
    
  return(
      <div style={{display:show}} className={"stereo_cookie"}>

        <p>This page places and reads third party cookies on your browser. Click <span>here</span> to read more. </p>
          <div className={"stereo_cookie_btn"}>
          <button onClick={handleAccept}>accept</button>
          <button onClick={handleReject}>reject</button>
          </div>

      </div>
  );
}

export default Cookie;