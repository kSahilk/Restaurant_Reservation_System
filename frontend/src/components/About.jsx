import React from "react";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Royal Dhabha!
Located in the heart of Jind, we bring you the vibrant flavors of India. Our menu is crafted with fresh, locally-sourced ingredients and traditional recipes passed down through generations. From smoky tandoori dishes to rich, flavorful curries, every meal is made with love and care, just like at home.
Whether you’re here for a quick bite or a relaxed meal with friends and family, we promise a warm and welcoming experience. Come visit us and enjoy the true taste of India, served with authenticity and heart.
            </p>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
