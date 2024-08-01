import './screen5.css';
import {
    useEffect, 
    useState
} from 'react';
import React from 'react';

export const Screen5 = React.forwardRef((props, ref) => {
  
    const [meetings, setMeetings] = useState();

    return(
        <div 
            className='screen5-container'
            ref={ref} 
        >
            <div className='meeting-grid'>
                <h2>Meetings</h2>
                <p>Mondays </p>
                <p>Fridays </p>
            </div>
        </div>
    )
})