import Image from 'next/image';
import loginDefault from '../images/Sign-In-Large---Default.png';
import loginActive from '../images/Sign-In-Large---Active.png';
import loginHover from '../images/Sign-In-Large---Hover.png';
import { useState } from 'react';

export default function Login() {
  const [image, setImage] = useState(loginDefault);

  const handleHover = () => {
    setImage(loginHover);
  };

  const handleClick = () => {
    setImage(loginActive);
  };

  const handleDefault = () => {
    setImage(loginDefault);
  }

  return (
    <div className = 'LoginDiv'>
      <a href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=777wrznuz9eit6&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome&state=hehe&scope=r_liteprofile%20r_emailaddress">
        <Image src = {image} width = {500} height = {100} onMouseEnter = {handleHover} onMouseLeave = {handleDefault} onClick = {handleClick}></Image>
      </a>
    </div>
  );
}