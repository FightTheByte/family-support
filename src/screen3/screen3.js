import './screen3.css';
import profile from '../assets/profile.png';
import React from 'react';

export const Screen3 = React.forwardRef((props, ref) => {

    return(
        <div 
            className="screen3-container"
            ref={ref}
        >
            <img 
                src={profile}
                className='profile'
            ></img>
            <p className='description-text'>
                Caithness Family Support Group was started roughly two and a half years ago. It is an organic, peer led, group for people who have 
                a loved one with problematic addiction issues. Living with a loved one who has an addiction is a lonely, chaotic place. Stigma 
                from other people is both hurtful and judgemental. One persons addiction can affect another eleven people. Talking with others 
                who are in a similar place is a great relief. It's helpful to know that there are others in the same situation. We share experiences of what has been 
                helpful, where and how to access help and guidance. We also provide information about you and your loved one's rights. Come and feel free to share your experience, say what you 
                want without being judged. 
            </p>
        </div>
    )
})