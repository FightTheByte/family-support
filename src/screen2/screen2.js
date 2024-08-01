import './screen2.css';
import React from 'react';

export const Screen2 = React.forwardRef((props, ref) => {


    return(
        <div 
            className="screen2-container"
            ref={ref}
        > 
            <h2 className='grand-hotel-very-small-screen2'>Testimonials</h2>
            <div className="screen2-columns">
                <div className='screen2-rows'>
                    
                    <div className='bubble'>
                            <p>"The group helped me to find the treatment my loved one needed and picked up the pieces when the treatment was not forthcoming. I honestly 
                                don't know how I managed with the group, as it has been an absolute lifesaver. My loved one is now over 2 years in recovery and I'm still 
                                attending the group meetings to try and help others."                        
                            </p>
                    </div>
                        
                    <div className='bubble'>
                        <p>"The Caithness Family Support Group has helped my mum find the strength to help me. They are a close and confidential group, and together they hand 
                            the ability ti best help me. - K"                        
                        </p>
                    </div>
                  
                    <div className='bubble'>
                        <p>"I cannot praise Nancy, at the Caithness Support Group, enough for all her advice, empathy, 
                            commitment and continuous support over the last couple of years. When times have been extremely challenging trying to 
                            support our family member, who is living with an undiagnosed mental illness, Nancy is always there with her caring compassionate
                            support; enabling me to get through this difficult time in our lives"                        
                        </p>
                    </div>
                </div>
    
                <div className='screen2-rows'> 
    
                    <div className='bubble'>
                        <p>"I joined Caithness Family Support Group 3 years ago and have never looked back. Before I found the group I was totally 
                            on my own and struggled with the stigma of having a loved one in addiction. The support, compassion and wealth of knowledge 
                            I gained from Nancy and the group helped me understand I was not to blame for my loved ones addiction, I certainly was not alone 
                            and I should not be ashamed; as none of this was my fault."                        
                        </p>
                    </div>   
    
                    <div className='bubble'>
                        <p>"By my mum going to the Caithness Family Support Group I was able to get information and support to best help me
                            navigate on my journey to becoming completely sober. Where the authorities failed me and their cared dropped below 
                            an acceptable standard, the group was able to help me deal with my triggers, know when something wasn't right and address
                            it correctly"                        
                        </p>
                    </div>
    
                    <div className='bubble'>
                        <p>"The Caithness Family Support Group, as a recovering addict, have helped me and my family massively. If it wasn't for my family getting support
                            I've no idea how they'd be able to support me and my recovery. Family are always taken for granted but if it wasn't for family no recovering addict 
                            would succeed and hand on heart the Caithness Family Support are true angels."                        
                        </p>
                    </div>  
    
                </div>
            </div>
        </div>
    )
})