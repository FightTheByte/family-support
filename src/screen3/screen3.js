import './screen3.css';
import profile from '../assets/profile.png';

export function Screen3(){

    return(
        <div className="screen3-container">
            <img 
                src={profile}
                className='profile'
            ></img>
            <p className='description-text'>
                Caithness Family Support Group was started roughly two and a half years ago. It is a peer led organic group for people who have 
                a loved one with problematic addiction issues. Living with a loved one who has an addiction is a lonely, chaotic place. Stigma 
                from other people is both hurtful and judgemental. One persons addiction can affect another eleven people. Talking with others 
                who are in a similar place is a great relief to know there are others in the same situation. We share experiences of what has been 
                helpful, where and how to access help and guidance. Also knowing you and your loved ones rights. Come and feel free to say what you 
                want without being judged. 
            </p>
        </div>
    )
}