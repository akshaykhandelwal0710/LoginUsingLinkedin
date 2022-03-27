import Image from 'next/image';
import loginDefault from '../images/Sign-In-Large---Default.png';
import loginActive from '../images/Sign-In-Large---Active.png';
import loginHover from '../images/Sign-In-Large---Hover.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import loader from '../images/loader.gif';

var loading = false;

export default function Login() {
  const [image, setImage] = useState(loginDefault);
  const router = useRouter();

  const handleHover = () => {
    setImage(loginHover);
  };

  const handleClick = () => {
    setImage(loginActive);
  };

  const handleDefault = () => {
    setImage(loginDefault);
  };

  const getToken = async () => {
    const code = router.query.code;
    const response = await fetch('http://localhost:9000/fetchCode?code='+code, {
      method: 'POST'
    });
    window.localStorage.setItem('token', (await response.json()).access_token);
    loading = false;
    if (window.localStorage.getItem('token') != undefined){
      //console.log(window.localStorage.getItem('token'));
      router.push('/home');
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('token') != undefined){
      //console.log(window.localStorage.getItem('token'));
      router.push('/home');
    }
  });

  if (loading){
    return (
      <div className='loader'>
        <Image src = {loader} width = {300} height = {300}></Image>
      </div>
    );
  }

  if (!loading && router.query.code != undefined){
    loading = true;
    getToken();
  }

  return (
    <div className = 'LoginDiv'>
      <a href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=777wrznuz9eit6&redirect_uri=http://localhost:3000/&state=hehe&scope=r_liteprofile%20r_emailaddress">
        <Image src = {image} width = {500} height = {100} onMouseEnter = {handleHover} onMouseLeave = {handleDefault} onClick = {handleClick}></Image>
      </a>
    </div>
  );
}