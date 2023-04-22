import React from 'react'

export default function VideoBanner() {
    return (
        <>
            <div className='videos'>
                <div className=''>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={"banner.mp4"} type='video/mp4' />
                    </video>
                </div>

                <div class="video-content">
                    <p className='webdesign'>Kerala's Leading Web Design Company</p>
                    <p className='global'>Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</p>
                </div>
            </div>
        </>
    )
}
