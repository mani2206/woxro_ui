import React from 'react'

export default function Headersection() {
  return (
    <div>
      <section className='header-color text-light d-none d-lg-block'>
        <ul className='d-flex justify-content-between p-2 m-0'>
          <li>
            <a href='#' className='d-flex justify-content-center text-decoration-none text-light'>
              <b >Now Hiring:</b>
              <p className='m-0 '>Looking for a job in Full Stack Development? </p>
            </a>
          </li>
          <li className='d-flex'>
            <a href='#' className='text-decoration-none px-4 text-light'>
              <i class="fa fa-phone"></i>
              <strong>&nbsp;&nbsp;+91 487 2080 212</strong>
            </a>
            <a href='#' className='text-light text-decoration-none'>
              <i class="fa fa-map-marker px-1"></i>
              <span className='font-weight-light'>Leshore Business Park, Thrissur</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
