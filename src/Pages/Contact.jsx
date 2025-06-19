import React from 'react'
import './Contact.css'
import tg_icon from '../assets/icons8-telegram-128.png'
import ds_icon from '../assets/icons8-discord-128.png'
import ContactGif_Box from '../Components/ContactGif_Box'

function Contact() {
  return (
    <div className="Contact">
      <div className="header_contact"></div>
      <div className="razdel about_contact glow-gradient"></div>
      <aside>
        <div className="info_con1">
          <h1>DISCORD</h1>
          <h3><a href="https://discord.com/users/gargulwerbul110">@gargulverbul110</a></h3>
          <img src={ds_icon} alt="" />
        </div>
        <div className="info_con2">
          <ContactGif_Box/>
        </div>
        <div className="info_con3">
          <h1>TELEGRAM</h1>
          <h3><a href="https://t.me/Lucky_TheTVman">@Lucky_TheTVman</a></h3>
          <img src={tg_icon} alt="" />
        </div>
      </aside>
      <footer>
        <div className="footer_contactAlso">
        <h1>Дзвонити по номеру:</h1>
        <h3><a href="tel:+">• 380933064601</a></h3>
        <h1>Писати по таким адресам:</h1>
        <h3><a href="mailto:">• gaponenkoanna97@gmail.com</a></h3>
        <h3><a href="mailto:">• greylunapers@gmail.com</a></h3>
        </div>
      </footer>
    </div>
  );
}

export default Contact;