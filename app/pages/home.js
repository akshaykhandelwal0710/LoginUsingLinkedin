import { useRouter } from 'next/router';
import { useState } from 'react';
import Login from './index.js';

var used = false;

export default function Home(){
    const router = useRouter();
    var code;

    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({});

    const getData = async () => {
        const response = await fetch('http://localhost:9000/fetchCode?code='+code, {
            method: 'POST'
        });

        const dat = await response.json();
        setData(dat);
        if (dat['error'] == undefined){
            console.log("here\n");
            const resp = await fetch('http://localhost:9000/fetchInfo?token=' + dat.access_token, {
                method: 'POST'
            });
            const d = await resp.json();
            setData(d);
            setLoggedIn(true);
        }
    };

    if (!loggedIn && !used){
        if (router.query.code != undefined){
            code = router.query.code;
            used = true;
            getData();
            console.log(data);
        }
    }

    if (loggedIn){
        
        return (
            <div className = 'Welcome'> Welcome {data.firstName.localized.en_US} {data.localizedLastName} ! </div>
        );
    }
    else{
        return (
            <div>
                <Login></Login>
            </div>
        )
    }
}