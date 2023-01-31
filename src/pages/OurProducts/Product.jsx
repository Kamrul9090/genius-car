import React from 'react';
import star from '../../assets/icons/star.png'
const Product = ({ service }) => {
    const { title, images, price } = service;
    return (
        <div className="card w-100 bg-base-100 shadow-2xl">
            <figure className="w-1/2 mx-auto bg-slate-300 m-5 rounded-md">
                <img src={images} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body text-center w-1/2 mx-auto">
                <h2 className="font-bold">{title}</h2>
                <div className='flex'>
                    <img className='w-8 h-8' src={star} alt="" srcset="" />
                    <img className='w-8 h-8' src={star} alt="" srcset="" />
                    <img className='w-8 h-8' src={star} alt="" srcset="" />
                    <img className='w-8 h-8' src={star} alt="" srcset="" />
                    <img className='w-8 h-8' src={star} alt="" srcset="" />
                </div>
                <p className='font-semibold text-red-500'>Price:${price}</p>
            </div>
        </div>
    );
};

export default Product;