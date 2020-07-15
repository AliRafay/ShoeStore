import React from 'react';
import ShopNowButton from './Button'




function Home() {
    return (
      <div className="Home">
        <div>
      <img src={"https://www.archerfriendly.com/wp-content/themes/archerfriendly/images/welcome-to-the-store.png"} alt="Welcome" style={{width:'85%', height: '400px', maxWidth:'100%'}}></img>
        </div>
           <div style={{width:"80%",margin:"0 auto"}}><p><b><i className="Bold"><strong>Rafay Shoe Store</strong></i> is Pakistan's internationally marketed brand of contemporary, casual footwear for men, women and children.
           The shoes have been described as "the classic Pakistani brushed-suede shoes with the lightweight crepe sole".
            A division of Wolverine World Wide. <strong><i  className="Bold">Rafay Shoe Store</i> </strong>
            is headquartered in Karachi, Pakistan.</b></p>
            </div>
            <div><ShopNowButton/></div>
        
    </div>
      

     );
  }
  
  export default Home;
  