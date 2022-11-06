import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 p-6 shadow-xl">
            <figure><img src={img} alt="Shoes" className='rounded-lg' /></figure>
            <div className="card-body font-bold">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-700'>Price: <span>${price}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;