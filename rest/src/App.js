
import react from 'react';
import './App.css';
import image from './CANTEEN.png';
import logo from './star2.png';


function App() {
  return(
    <>
    <div className='container'>
      <div className='header'>
        <div className='image'>
          <img src={image} className="can"/>
          
            <div className='res'>
              <h1 className='name'>AADIL RESTAURANT</h1>
              <p> <img src={logo} className="black"/><span>U.S Certified</span></p>
                  <div className='sec_container'>
                    <h4 className='menu'>Menu</h4>
                    <h4 className='about'>About</h4>
                    <h4 className='award'>Awards</h4>
                    <h2 className='num'>345678905<br/>*We Deliver</h2>
                  </div>
            </div>
        </div>
      </div>
    </div>
    <div className='next-container'>

    </div>
    <footer className='third-container '>
      <div className='first-para'>
        <h2 className='hour'>Hours:</h2>
        <p className='days'>Sun-Thurs:11:15am-10:00pm<br/>Fri:11:15am -2:30pm<br/>Saturday Closed</p>
      </div>

      <div className='sec-para'>
        <h2 className='add'>Address:</h2>
        <p className="address">45/1,45/2, Avallahalli<br/>Huskur panchayath,Sarjapura Hobli,Anekal Taluk<br/>
        Dist,Bengaluru,karnataka 566099</p>
        <p className='deliver'> *Delivery area within 3-4 miles,with minimum order of $20 <br/>plus $3 charge for all deliveries.</p>
      </div>
      {/* <div className='third-para'>
        <p className='rev'>"The best Chinese restaurant I've been to!And <br/>that saying a lot,since I've been to many!"</p>
      </div> */}
    </footer>
    </>
  )
}

export default App;


