import './home.css';
import { Screen1 } from '../screen1/screen1';
import { Screen2 } from '../screen2/screen2';
import { Screen3 } from '../screen3/screen3';
import { Screen4 } from '../screen4/screen4';
import { Screen5 } from '../screen5/screen5';
import { Sidebar } from '../sidebar/sidebar';
import { isMobile } from 'react-device-detect';
import { useRef } from 'react';



export function Home(){
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);


    function scrollTo(compRef) {
        if(!compRef.current) return;
        compRef.current.scrollIntoView({behavior: 'smooth'})
    }
    
    return(
        <div className='landing-container'>
            <Screen1/>
            <Screen2 ref={ref2}/>
            <Screen3 ref={ref3}/>
            <Screen4 ref={ref4}/>
            <Screen5 ref={ref5}/>
            {
                isMobile
                ?null
                :<Sidebar
                  scrollTo2={() => scrollTo(ref2)}
                  scrollTo3={() => scrollTo(ref3)}
                  scrollTo4={() => scrollTo(ref4)}
                  scrollTo5={() => scrollTo(ref5)}
                />
            }
        </div>
    )
}