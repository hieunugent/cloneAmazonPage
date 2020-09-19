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
      <div className="home__row">
        <Product
          id="12324512"
          title="the best stock image"
          price={12.99}
          rating={5}
          image="https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic-533x800.jpg"
        />
        <Product
          id="1122334"
          title="Cooler Master HAF XB EVO - High Air Flow Test Bench and Lan Box Desktop Computer Case with ATX Motherboard Support"
          price={102.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Bjq5xnJJL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123444512"
          title="Web Design with HTML, CSS, JavaScript and jQuery Set"
          price={47.99}
          rating={5}
          image="data:image/webp;base64,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"
        />
        <Product
          id="3434512"
          title='EUREKA ERGONOMIC I1-S Computer Gaming Desk, 43.3" Small Home Office PC Gaming Desk with Eureka Gaming Mousepad T-Shaped Writing Study Tables Popular'
          price={136.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61qM2r-DGNL._AC_SL1200_.jpg"
        />
        <Product
          id="12324512"
          title="Bag Bicycle Bag Waterproof Bike Phone Mount Top Tube Bag Bike Phone Case Holder Accessories Cycling Pouch Compatible with iPhone 11 XS Max XR Below 6.5”"
          price={22.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81jeu%2Bwh-uL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12324512"
          title="LG 29WL500-B 29'' Class 21:9 UltraWide FHD IPS Monitor with HDR10 + LCD Cleaning Kit, and Electronics Basket Microfiber Cloth - Base Bundle"
          price={224.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71UyYfxMb1L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
