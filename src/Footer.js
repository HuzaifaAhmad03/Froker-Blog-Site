import React from 'react'
import './App.css'
import mailimage from './mailimage.png'
import footer from './footer.png'
import logoF from './logoF.png'
import logos from './logos.png'
import mail from './mail.png'
import loc from './loc.png'

const Footer = () => {
    return (
        <div className='foot'>
            <div className='subs'>
                <img className='mail-img' src={mailimage} alt='mail img' />
                <div className='not-img'>
                    <h1 className='subs-head'>Subscribe to our newsletter to get the latest updates and news</h1>
                    <form method='post'>
                        <input className='input-mail' type='mail' placeholder='Enter your email'></input>
                        <input className='sub-btn' type="submit" value='Subscribe'></input>
                    </form>
                </div>
            </div>
            <div>
                <div className='foot-cols'>
                    <div className='foot-rows'>
                        <img className='footer-logo-img' src={logoF} alt='logo img' />
                    </div>
                    <div className='foot-rows'>
                        <h3>Quicklink</h3>
                        <ul type="none">
                            <li>&gt; Home</li>
                            <li>&gt; About</li>
                            <li>&gt; Privacy policy</li>
                            <li>&gt; Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='foot-rows'>
                        <h3>Contacts</h3>
                        <ul type="none">
                            <li><img className='comp-logo-img' src={loc} alt='logo img' />Whitefield, Bengaluru, 560066</li>
                            <li><img className='comp-logo-img' src={mail} alt='logo img' />support@froker.in</li>
                            <li><img className='comp-logo-img' src={logos} alt='logo img' /></li>
                        </ul>
                    </div>
                </div>
                <img className='footer-img' src={footer} alt='mail img' />
            </div>
        </div>
    )
}

export default Footer