import React from 'react';

const Product = ({ service }) => {
    const { title, images, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={images} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Price:${price}</p>
            </div>
        </div>
    );
};

export default Product;