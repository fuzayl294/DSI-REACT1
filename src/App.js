import aaa from "./Pictures/logo.png";
import sss from "./Pictures/Union.png";
import bbb from "./Pictures/mail.png";
import ccc from "./Pictures/shuffle.png";
import header from "./Pictures/header_text.png";
import vector from "./Pictures/pana.png";
import pana from "./Pictures/pana2.png";
import card from "./Pictures/card.png";
import card1 from "./Pictures/card1.png"
import card2 from "./Pictures/card2.png"
import "./index.css";

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="navbar_logo">
              <img src={aaa} alt="" />
            </div>
            <div className="navbar_ter">
              <ul>
                <li>Services</li>
                <li>Product</li>
                <li>Technology</li>
                <li>About</li>
                <li>Client</li>
                <li>Partner</li>
              </ul>
            </div>
            <div className="logo">
              <img src={sss} alt="" />
              <img src={bbb} alt="" />
              <img src={ccc} alt="" />
            </div>
          </div>
        </div>
      </nav>


      <header>
        <div className="container">
          <div className="header">
            <div className="header_text">
              <img  src={header}  alt="" />
              <p>Managed by a team of professional experts with extensive <br></br> experience and impressive track records</p>
            </div>
           
            <div className="vector">
              <img src={vector}  alt="" />
            </div>
          </div>
          <div className="button">
            <button>Read More</button>
          </div>
        </div>
      </header>


      <section>
        <container>
          <div className="section">
           <div className="left">
           <div className="pana">
            <img   src={pana} alt="" />
           </div>
           </div>
          
           <div className="right">
            <div className="right_tittle">
               <h1>Welcome to 
                 <span>Dwidasa Samsara  <br></br>
                 Indonesia (DSI)</span></h1>
            </div>
            
            <div className="p1">
            <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 <br></br> by the founders, who each of them has a common end objective <br></br> to innovate new creations by making the most of <br></br> the ever-growing information technology through  <span>DSI’s</span> distinct <br></br> front-end based application concept.</p>
            </div>
        <div className="p2">
          <p>Managed by a team of professional experts with extensive <br></br> experience and impressive track records,  <span>DSI</span> believes that <br></br> continuous improvements and innovations assure your business <br></br> to run effectively and efficiently.</p>
          </div>
          
           </div>
          </div>
        </container>
      </section>




      
    <aside>
      <div className="container">
      <div className="asside_tittle">
              <h1>Product and Service</h1>
            </div>
        <div className="asside">
          <div className="asside_cards_card">
         

             <img src={card}  alt=""  />
             <h1 class="aside_cards_card_h1">Our Product</h1>
              <p className="aside_cards_card_p">Our product is made on the base of our <br></br> team’s careful research and analyses, <br></br> ranging from internet based <br></br>  application.</p>
              <button class="aside_cards_card_btn">Read More</button>
          </div>


          <div className="asside_cards_card">
             <img src={card1}  alt=""  />
             <h1 class="aside_cards_card_h1">Our Service</h1>
              <p className="aside_cards_card_p">DSI’s shared service solutions focus on <br></br> the front-end based software <br></br> development, designed specifically for <br></br> the banking and financial sectors.</p>
              <button class="aside_cards_card_btn">Read More</button>
          </div>


          <div className="asside_cards_card">
             <img src={card2}  alt=""  />
             <h1 class="aside_cards_card_h1">Our Technology</h1>
              <p className="aside_cards_card_p">First JAVA, runs on more than 850 <br></br>  million personal computers worldwide,<br></br> and on billions of devices worldwide, <br></br> including mobile and TV devices.</p>
              <button class="aside_cards_card_btn">Read More</button>
          </div>


        </div>
      </div>
    </aside>


    <footer>
       <div className="container">
        <div className="footer">
          Copyright © 2015 - Dwidasa Samsara Indonesia
        </div>
       </div>
      </footer>
    </>
  );
}

export default App;
