import React from 'react';
import data from '../../Data';

export default function Maincontent() {
    return (
        <>
            <div className='text-center mainheading'>
                <p className='service'>SERVICES WE DELIVER</p>
                <h3 className='prepare'>Preparing for your success, we provide truly prominent IT solutions.</h3>
            </div>
            <div className='graphiccard'>

                {data.map((key, index) => {
                    return (
                        <>
                        <div className={key.classname}>
                            <div className='cardimage'>
                                <div>
                                    <img src={key.logo} />
                                </div>
                            </div>
                            <div className='cardheader'>
                                <div>
                                    <p>{key.heading}</p>
                                </div>
                            </div>
                            <div className='cardcontent'>
                                <p className='m-0'>{key.content}</p>
                            </div>
                        </div>    
                        </>

                    )
                })}
        </div >
        </>
    )
}
