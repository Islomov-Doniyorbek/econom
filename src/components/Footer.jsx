import React from 'react';
import { FaChevronCircleRight, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

import '../index.css';

const Footer = () => {
  return (
    <><footer className="footer">
<div className="footer-container">
<div className="footer-section">
<h3>About Uzbekistan Daily</h3>
<p>Economily is your daily guide to the most compelling and unconventional stories in global and Uzbekistan’s economy. We break down complex topics into clear, detailed insights—making economics simple, smart, and impossible to ignore.</p>
<div className="social-links mt-1.5">
<a className="social-link" href="#"><FaFacebook/></a>
<a className="social-link" href="#"><FaTwitter/></a>
<a className="social-link" href="#"><FaInstagram/></a>
<a className="social-link" href="#"><FaTelegram/></a>
<a className="social-link" href="#"><FaYoutube/></a>
</div>
</div>
<div className="footer-section">
<h3>News Categories</h3>
<ul className="footer-links">
<li><a href="#">Politics</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Economy</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Culture &amp; Arts</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Sports</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Education</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Health</a></li>
</ul>
</div>
<div className="footer-section">
<h3>Stock Market</h3>
<ul className="footer-links">
<li><a href="#"><i className="fas fa-chevron-right"></i> Market Overview</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Top Gainers</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Top Losers</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Sector Analysis</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Market News</a></li>
<li><a href="#"><i className="fas fa-chevron-right"></i> Economic Calendar</a></li>
</ul>
</div>
<div className="footer-section">
<h3>Contact Us</h3>
<div className="contact-info flex items-center gap-2.5">
<FaMapMarkerAlt/>
<span>123 News Street, Tashkent, Uzbekistan</span>
</div>
<div className="contact-info flex items-center gap-2.5">
<FaPhone/>
<span>+998 71 123 4567</span>
</div>
<div className="contact-info flex items-center gap-2.5">
<FaTelegram/>
<span>https://t.me/Celestian_swirl</span>
</div>
<div className="contact-info flex items-center gap-2.5">
<FaEnvelope/>
<span>info@uzbekistandaily.uz</span>
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