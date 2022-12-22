import React from 'react';
import img1 from '../../assets/images/products/1.png'
import img2 from '../../assets/images/products/2.png'
import img3 from '../../assets/images/products/3.png'
import img4 from '../../assets/images/products/4.png'
import img5 from '../../assets/images/products/5.png'
import img6 from '../../assets/images/products/6.png'
import Product from './Product';

const OurProducts = () => {
    const services = [
        {
            id: 1,
            images: img1,
            title: "Car Engine Plug",
            price: 20,
        },
        {
            id: 2,
            images: img2,
            title: "Car Air Filter",
            price: 20,
        },
        {
            id: 3,
            images: img3,
            title: "Cools Led Light",
            price: 20,
        },
        {
            id: 4,
            images: img4,
            title: "Cools Led Light",
            price: 20,
        },
        {
            id: 5,
            images: img5,
            title: "Cools Led Light",
            price: 20,
        },
        {
            id: 6,
            images: img6,
            title: "Cools Led Light",
            price: 20,
        },
    ]
    return (
        <div>
            <div className='my-10 w-1/2 mx-auto text-center space-y-4'>
                <h1 className='text-xl text-red-600'>Popular Products</h1>
                <h1 className='text-3xl'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Product key={service.id} service={service}></Product>)
                }
            </div>
        </div>
    );
};

export default OurProducts;