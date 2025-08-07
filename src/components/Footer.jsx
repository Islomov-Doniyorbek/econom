import React from 'react';
import { FaChartPie, FaChevronCircleRight, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaNewspaper, FaPhone, FaTelegram, FaTimesCircle, FaTwitter, FaYoutube } from 'react-icons/fa';

import '../index.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <><footer className="footer">
<div className="footer-container">
<div className="footer-section">
<h3>About <br/> The project</h3>
<p>Economily is your daily guide to the most compelling and unconventional stories in global and Uzbekistan’s economy. We break down complex topics into clear, detailed insights—making economics simple, smart, and impossible to ignore.</p>
<div className="social-links mt-1.5">
<a className="social-link" href="https://t.me/economily"><FaTelegram/></a>
<a className="social-link" href="https://www.linkedin.com/company/economily/"><FaLinkedin/></a>
</div>
</div>
<div className="footer-section">
  <h3>Sections</h3>
  <div className="social-links flex flex-col gap-7">
    <Link className='flex items-center gap-7' to={"/articles"}><FaNewspaper/> Articles</Link>
    <Link className='flex items-center gap-7' to={"/news"}><FaClock/> News</Link>
    <a className='flex items-center gap-7' href="#stock-market"><FaChartPie/> Stock Market</a>
  </div>
</div>
<div className="footer-section">
<h3>Contact Us</h3>
<div className="contact-info flex items-center gap-2.5">
  <FaPhone/>
  <span>+998 98 125 19 81</span>
</div>
<div className="contact-info flex items-center gap-2.5">
<FaTelegram/>
<span>https://t.me/neovis</span>
</div>
<div className="contact-info flex items-center gap-2.5">
<FaEnvelope/>
<span>muhiddintoshqulov126@gmail.com </span>
</div>
<div className="contact-info flex items-center gap-2.5">
<FaClock/>
<span>Mon-Fri: 9:00 AM - 6:00 PM</span>
</div>
</div>
</div>
<div className="copyright">
<p>© 2025 Uzbekistan Daily News. All Rights Reserved.</p>
<p>Sources: Uzbekistan National News Agency, Tashkent Stock Exchange, Ministry of Foreign Affairs</p>
</div>
</footer></>
  );
};

export default Footer;