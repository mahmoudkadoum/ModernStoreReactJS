import React from 'react'
import Products from './Products'
import HomeBG from '../HomeBG'

const Home = () => {
    const BGSliderbtn = (item) => {
        return (
            <button type="button" data-bs-target="#carouselExampleIndicators" key={item.id} data-bs-slide-to={`${item.id}`} aria-label={`Slide${item.id + 1}`}></button>
        );
    }
    const BGSliderimg = (item) => {
        return (
            <div className="carousel-item" key={item.id}>
              <img src={item.img}  className="d-block w-100" alt="..." height="585px"/>
            </div>
        );
    }

    return (
        <div>
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        {HomeBG.length && HomeBG.map(BGSliderbtn)}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/images/home/img1.jpg" className="d-block w-100" alt="..." height="585px"/>
        </div>
        {HomeBG.length && HomeBG.map(BGSliderimg)}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        <Products/>
        </div>
      )
    }
    
    export default Home