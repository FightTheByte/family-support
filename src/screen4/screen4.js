import './screen4.css'
import screen4 from '../assets/screen4.jpg'

export function Screen4(){

    

    return (
        <div className='screen4-container'>
            <div className='contact-details'>
                <h4 className='contact-us'>Contact Us</h4>
                <h4 className='details'>Phone Number: <a href="tel:+4407754763950">07754763950</a></h4>
                <h4 className='details'>Email: <a href="mailto:caithnessfamilysupportgroup@gmail.com">caithnessfamilysupportgroup@gmail.com</a></h4>
            </div>

            <div className='screen4-right-container'>
                <img src={screen4} className='screen4-image'/>
            </div>            
        </div>
    )
}