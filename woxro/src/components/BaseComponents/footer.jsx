import React from 'react'

export default function Footer() {
    return (
        <div className='footer-bg'>
            <div className='footercontent'>
                <p>We offer all kinds of IT services that<br/> ensure your success</p>
            </div>
            <div className='d-flex justify-content-around'>
                <button type="button" className=" contact" ><i class="fa fa-phone"></i>Contact Us</button>
                <button type="button" className=" talk"><i class="fa fa-comment"></i>Let's talk</button>
            </div>
        </div>
    )
}
