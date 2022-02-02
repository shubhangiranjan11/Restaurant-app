import react from "react";

function Footer() {
    return (
        <>
            <footer className='third-container '>
                <div className='first-para'>
                    <h2 className='hour'>Hours:</h2>
                    <p className='days'>Sun-Thurs:11:15am-10:00pm<br />Fri:11:15am -2:30pm<br />Saturday Closed</p>
                </div>

                <div className='sec-para'>
                    <h2 className='add'>Address:</h2>
                    <p className="address">45/1,45/2, Avallahalli<br />Huskur panchayath,Sarjapura Hobli,Anekal Taluk<br />
                        Dist,Bengaluru,karnataka 566099</p>
                    <p className='deliver'> *Delivery area within 3-4 miles,with minimum order of $20 <br />plus $3 charge for all deliveries.</p>
                </div>
                <div className='third-para'>
                    <p className='rev'>"The best Chinese restaurant I've been to!And <br />that saying a lot,since I've been to many!"</p>
                </div>
                {/* <p className='last'>Aadil restaurant</p> */}
            </footer></>
    )
}

export default Footer;
