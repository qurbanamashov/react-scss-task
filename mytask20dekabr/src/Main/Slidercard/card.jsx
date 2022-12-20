import React from 'react'
import "./card.scss"

function card() {
  return (
    <section className='section_card'>
    <h1>EXPLORE OUR PRODUCTS</h1>
        <div className='card_flex'>
            <div className='card'>
                <img src="https://dlcdnwebimgs.asus.com/gain/868C3307-DD02-4624-8BA7-31B62EE4A38F/w240/h175" alt="" />
                <p>Leptops</p>
            </div>
            <div className='card'>
                <img src="https://dlcdnwebimgs.asus.com/gain/46C25470-DD4F-4E8E-954E-E4016A52CBB7/w240/h175" alt="" />
                <p>Motherboards</p>
            </div>
            <div className='card'>
                <img src="https://dlcdnwebimgs.asus.com/gain/01480520-08BA-439E-A626-2E3D6F0D9908/w240/h175" alt="" />
                <p>Graphics Cards</p>
            </div>
            <div className='card'>
                <img src="https://dlcdnwebimgs.asus.com/gain/01480520-08BA-439E-A626-2E3D6F0D9908/w240/h175" alt="" />
                <p>Monitors</p>
            </div>
            <div className='card'>
                <img src="https://dlcdnwebimgs.asus.com/gain/A8895516-3C00-4DA2-97CA-04F258098672/w240/h175" alt="" />
                <p>Phones</p>
            </div>
        </div>
    </section>
  )
}

export default card