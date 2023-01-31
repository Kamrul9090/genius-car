import React from 'react';
import logo1 from '../../../assets/icons/calender.png'
import logo2 from '../../../assets/icons/adress.png'
import logo3 from '../../../assets/icons/hotline.png'

const Time = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around bg-black h-52 rounded-lg text-gray-200 mb-20'>
            <div className='flex items-center'>
                <img src={logo1} alt="" srcset="" />
                <div>
                    <h4>We are open monday-friday</h4>
                    <h1>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={logo3} alt="" srcset="" />
                <div>
                    <h4>Have a question?</h4>
                    <h1>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={logo2} alt="" srcset="" />
                <div>
                    <h4>Need a repair? our address</h4>
                    <h1>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Time;