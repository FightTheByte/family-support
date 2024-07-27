import './screen1.css';
import {Navbar} from '../navbar/navbar.js';
import screen1 from '../assets/screen1.jpg';
import { Sidebar } from '../sidebar/sidebar.js';
import { useRef } from 'react';


export function Screen1(){

    const myRef = useRef(null);

    function scrollTo() {
        if(!myRef.current) return;
        myRef.current.scrollIntoView({behavior: 'smooth'})
    }
    
    return(
        <div className='home-container'>
            <div className='home-left-screen1'>
                <div className='home-welcome-text'>
                    <h1 className='grand-hotel-small'>Welcome To The</h1>
                </div>
                <div className='home-left-screen1-text'>
                    <h1 className='grand-hotel-regular home-text-top'>Caithness Family</h1>
                    <h1 className='grand-hotel-regular home-text-bottom'>  Support Group</h1>
                </div>
                <div className='explanation-text'>
                    <h3 className='grand-hotel-very-small'>Support for families affected by Drug and Alcohol addiction</h3>
                </div>
            </div>
            <div className='home-right-screen1'>
                <img 
                    src={screen1}
                    className='home-right-screen1-image'                 
                />            
              
            </div>
        </div>
    )
}