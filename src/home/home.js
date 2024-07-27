import './home.css';
import { Screen1 } from '../screen1/screen1';
import { Screen2 } from '../screen2/screen2';
import { Screen3 } from '../screen3/screen3';
import { Screen4 } from '../screen4/screen4';
import { Sidebar } from '../sidebar/sidebar';
import { useRef } from 'react';


export function Home(){

    const myRef = useRef(null);

    function scrollTo() {
        if(!myRef.current) return;
        myRef.current.scrollIntoView({behavior: 'smooth'})
    }
    
    return(
        <div className='landing-container'>
            <Screen1/>
            <Screen2/>
            <Screen3/>
            <Screen4/>
            <Sidebar/>
        </div>
    )
}