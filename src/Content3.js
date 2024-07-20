import React from 'react';
import image3 from './image3.png';
import like from './like.png';
import comImg from './comImg.png';
import './App.css'

const Content3 = () => {
  return (
    <div className="opened-content">
      <h5 className='add-head'>Blog &gt; Forbes 30 Under 30 India: Celebrating the Trailblazers of Tomorrow</h5>
      <img className="content-img" src={image3} alt="Blog Img" />
      <h1 className='blog-title'>FORBES 30 UNDER 30 INDIA: CELEBRATING THE TRAILBLAZERS OF TOMORROW</h1>
      <p className='by-tag'>by Varshita <span className='by-time'>2 minute read</span></p> <img className="like-img" src={like} alt="Like Img" />
      <p>
        <b><p className='content-head'>Forbes 30 Under 30 India: Celebrating the Trailblazers of Tomorrow</p></b><br />

       <p className='content-para'>Unconventional Geniuses, Fearless Entrepreneurs, and Creative Mavericks: In a world where innovation is the currency of success, the Forbes 30 Under 30 India list is like a treasure trove of young visionaries who are rewriting the rules. These remarkable individuals have not only broken barriers but also built bridges to a brighter future. So, grab your chai latte, settle into your bean bag, and let’s dive into the fascinating world of India’s trailblazers.</p>


       <p className='content-para'> <b>1. The Pandemic Pioneers:Redefining Resilience -</b>  The Class of 2023 is no ordinary bunch. They’ve weathered storms, danced with uncertainty, and emerged stronger. Many took the entrepreneurial plunge during the pandemic, proving that adversity is the best breeding ground for innovation. From Neeraj Chopra, the Tokyo 2020 Olympic gold medallist, to the dynamic duo behind Genrobotics Innovations (Arun George, Vimal Govind MK, Rashid Karimbanakkal, and Nikhil NP), these young guns are rewriting the playbook.</p>


       <p className='content-para'> <b>2. Women Who Mean Business:Breaking Glass Ceilings - </b> Eight women grace this year’s list, and they’re not here to play small. Misbah Ashraf (Jar) is revolutionizing the influencer marketing game, while Aashti Miller (MillerInk) is weaving magic with her words. UR Siddharth Philips is making healthcare smarter, and Sakshi Sindwani is strutting her stuff as a fashion influencer and digital content creator. These women are not just shattering glass ceilings; they’re building glass castles.</p>


       <p className='content-para'> <b>3. From Code to Crypto:The Digital Dreamweavers -</b> Cryptocurrency is now Web3, and our 20 categories reflect the digital zeitgeist. Romita Mazumdar (Foxtale) is creating immersive experiences, while Jayesh Gadewar (Scrut Automation) is automating the mundane. And let’s not forget Udit Singhal (Glass2Sand), who’s turning glass bottles into sand to save the planet. These tech wizards are coding their way to glory. </p>

        <img className="com-img" src={comImg} alt="com Img" />

        <p className='content-para'> <b>4. Stars on the Rise:From Silver Screens to Startups - </b> Our list isn’t complete without a dash of stardust. Anna Ben, the actor who stole hearts in “Kumbalangi Nights,” is now making waves off-screen too. Kalidas Jayaram, another silver screen sensation, is exploring new horizons. But it’s not all about the limelight. Rahul Rai (BlockTower Capital) is making waves in the finance world, while Siva Teja Kakileti (Niramai) is using AI to detect breast cancer. Lights, camera, impact! In Conclusion. The Forbes 30 Under 30 India is more than a list; it’s a celebration of audacity, resilience, and unbridled passion. These young achievers are not waiting for a seat at the table; they’re building their own. So, whether you’re sipping chai or chai latte, raise your cup to these extraordinary souls. They’re not just the future; they’re the present we’ve been waiting for.Remember, age is just a number. But impact? That’s timeless.</p>
              </p>
    </div>
  );
};

export default Content3;