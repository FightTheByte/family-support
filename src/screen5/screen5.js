import './screen5.css';
import {
    useEffect, 
    useState
} from 'react';
import React from 'react';

export const Screen5 = React.forwardRef((props, ref) => {
  
    useEffect(() => {
        //fetch()
        //.then(res => res.json())
        //.then(jsonRes => setMeetings(jsonRes))
    }, [])
    
    const [meetings, setMeetings] = useState([
        {
            day: 'Monday',
            time: '5:45-7:30pm',
            place: "Wick in the PPP Centre,"
        },
        {
            day: 'Wednesday',
            time: '2:00-3:30pm',
            place: 'Thurso Fire Station,'
        }
    ]);

    return(
        <div 
            className='screen5-container'
            ref={ref} 
        >   
            <div className='meeting-location'>
                <h2>Meetings</h2>
                {
                    meetings
                    ?meetings.map((meeting, index) => 
                        <div 
                            className='meeting-grid'
                            key={index}
                        >
                            <p>{meeting.day} at {meeting.place} from {meeting.time}</p>
                        </div>
                    )
                    :null
                }
            </div>
        </div>
    )
})