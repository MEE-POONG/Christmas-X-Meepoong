import React from "react";
import {FaFacebook,FaInstagram,FaLine,FaGlobe} from 'react-icons/fa'

function Footer() {
  return (
<footer className="bottom-0 ">

  <ul className="social_icon">
    <li><a href='https://www.facebook.com/meepoong'><FaFacebook/></a></li>
    <li><a href='https://www.instagram.com/meepoonggroup/'><FaInstagram/></a></li>
    <li><a href='https://lin.ee/bIG6HiG'><FaLine/></a></li>
    <li><a href='https://www.meepoong.com/'><FaGlobe/>  </a></li>
  </ul>

 <p>Copyright by 2021 MEE POONG CO., LTD.</p>
</footer>

  );
}

export default Footer;
