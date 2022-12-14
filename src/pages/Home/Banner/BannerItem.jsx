import React from 'react';
import './BannerItem.css'
const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-4/5">
            <div className='carousel-img'>
                <img alt="" src={image} className="w-full h-100 rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex text-white justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-xl lg:text-6xl'>Affordable <br />Price For Car <br />Servicing</h1>
            </div>
            <div className="absolute flex text-white lg:w-2/5 justify-end transform -translate-y-1/2 left-5 lg:left-24 top-1/2">
                <p className='lg:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex text-white justify-end transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-outline btn-warning mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;