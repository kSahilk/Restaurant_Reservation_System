import React from 'react'
// import 
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='1'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Menu</h1>
                <p className="Menu-Hed">"Explore our menu, where every dish is a flavorful journey through India’s rich culinary traditions."!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
