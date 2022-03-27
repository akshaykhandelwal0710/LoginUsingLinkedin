import { useState } from 'react';
import loader from '../images/loader.gif';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home(){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const getData = async () => {
        console.log(window.localStorage.getItem('token'));
        const resp = await fetch('http://localhost:9000/fetchInfo?token=' + window.localStorage.getItem('token'), {
            method: 'POST'
        });
        const d = await resp.json();
        console.log(d);
        setData(d);
        if (d.firstName == undefined){
            window.localStorage.removeItem('token');
            router.push('/');
        }
        else{
            setLoading(false);
            //console.log('yep');
        }
    };

    if (!loading && data.firstName == undefined){
        setLoading(true);
        getData();
        return (
            <div className='loader'>
                <Image src = {loader} width = {300} height = {300}></Image>
            </div>
        );
    }

    if (loading){
        return (
            <div className='loader'>
                <Image src = {loader} width = {300} height = {300}></Image>
            </div>
        );
    }
    else{
        return (
            <div className = 'Welcome'> Welcome {data.firstName.localized.en_US} {data.localizedLastName} ! </div>
        );
    }
}