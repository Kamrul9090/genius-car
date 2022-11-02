import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img alt="" src={person} className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img alt="" src={parts} className="w-3/6 absolute border-8 right-5 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h6 className=' text-orange-600 font-bold'>About Us</h6>
                    <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-outline btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;