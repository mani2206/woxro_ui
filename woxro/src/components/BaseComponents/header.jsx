import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom'

export default function BannerSection() {
  const [active, setActive] = useState(false)

  const activateNav = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='banner_logo d-flex  justify-content-between'>
        <div>
          <img
            src={'../.././images/woxrologo.png'}
            className='d-flex px-3 banner_image'
          />
        </div>
        <div className={active ? 'header' : 'header-mobile'}>
          <div className='menu-icon' onClick={activateNav}>
            {!active ? <IoMdMenu className='menu' /> : <IoMdClose className='menu menu-close' />}
          </div>
            <nav>
              <ul className={active ? 'ul-item' : 'ul-item  itemlist'}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/'>About Us</Link>
                </li>
                <li>
                  <Link to='/'>Services</Link>
                </li>
                <li>
                  <Link to='/'>Technology</Link>
                </li>
                <li>
                  <Link to='/'>Careers</Link>
                </li>
                <li>
                  <Link to='/'>Blog</Link>
                </li>
                <li>
                  <Link to='/'>Our Works</Link>
                </li>
                <li>
                  <Link to='/'>Contact us</Link>
                </li>
              </ul>
            </nav>
        </div>
      </div>

      {/* The following navigation is only visible on large screens */}
      <nav className='d-none d-lg-block'>
        <div className='d-flex justify-content-around bg-dark p-2'>
          <a href='#' className='text-light text-decoration-none'>
            Home
          </a>
          <a href='#' className='text-light text-decoration-none'>
            About US
          </a>
          <a href='#' className='text-light text-decoration-none'>
            Services
          </a>
          <a href='#' className='text-light text-decoration-none'>
            Technology
          </a>
          <a href='#' className='text-light text-decoration-none'>
            Carrers
          </a>
          <a href='#' className='text-light text-decoration-none'>
            Blogs
          </a>
          <a href='#' className='text-light text-decoration-none'>
            Our Works
          </a>
          <a href='#' className='text-light text-decoration-none'>
            Contacts Us
          </a>
        </div>
      </nav>
    </>
  );
}
