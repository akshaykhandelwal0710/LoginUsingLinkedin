import { useRouter } from 'next/router';
import { useState } from 'react';
import Login from './index.js';

export default function Home(){
    const router = useRouter();
    const { code } = router.query;
    console.log(code);

    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({});

    const getData = async () => {
        const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            params: {
                grant_type: 'authorization_code',
                code: code,
                client_id: '777wrznuz9eit6',
                client_secret: 'u654qmO5YXQEXzN9',
                redirect_uri: 'http://localhost:3000/home'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const dat = await response.json();
        if (dat.error == undefined){
            setLoggedIn(true);
            setData(dat);
        }
    };

    if (!loggedIn){
        getData();
        console.log(data);
    }

    if (loggedIn){
        return (
            <div> {JSON.stringify(data)} </div>
        );
    }
    else{
        return (
            <div>
                <Login></Login>
                {JSON.stringify(data)}
            </div>
        )
    }
}