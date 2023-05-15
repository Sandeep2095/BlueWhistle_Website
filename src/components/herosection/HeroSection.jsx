import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './HeroSection.css';
import banner2 from '../../media/home_banner2.jpg';
// import banner1 from '../../media/home_banner1.jpg';
import banner3 from '../../media/home_banner3.jpg';
import HeroSectionCard from '../herosectionCard/HeroSectionCard';

export const HeroSection = () => {
	return (
    <div className="hero-section-main-container">
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div style={{background:"#0e3252"}} className="carousel-inner">
            <div className="carousel-item">
              <LazyLoadImage
                effect="blur"
                style={{ backgroundColor: "#2D3142" }}
                src={banner2}
                className="w-100 hero-img"
                alt="heroImage"
              />
            </div>
            <div className="carousel-item active">
              <LazyLoadImage
                effect="blur"
                style={{ backgroundColor: "#2D3142" }}
                src={banner3}
                className="w-100 hero-img"
                alt="heroImage"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <HeroSectionCard />
      </div>
    </div>
  );
};
