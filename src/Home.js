import React from "react";
import Product from "./Product";
import "./Home.css"
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Proeduct id, title, price, rating image */}
      <Product
        id="12324512"
        title="the best stock image"
        price={12.99}
        rating={5}
        image="https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic-533x800.jpg"
      />
    </div>
  );
}

export default Home;
