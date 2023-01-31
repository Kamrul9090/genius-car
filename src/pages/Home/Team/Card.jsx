import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import icon1 from '../../../assets/icons/fb.png'
import icon2 from '../../../assets/icons/In.png'
import icon3 from '../../../assets/icons/tw.png'
import icon4 from '../../../assets/icons/linkedIn.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Card = () => {
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    const cardData = [
        {
            image: img1,
            title: 'Car Engine Plug',
            expert: "Engine Expert",
            fb: icon1,
            in: icon2,
            tw: icon3,
            ln: icon4,
        },
        {
            image: img2,
            title: 'Car Engine Plug',
            expert: "Engine Expert",
            fb: icon1,
            in: icon2,
            tw: icon3,
            ln: icon4,
        },
        {
            image: img3,
            title: 'Car Engine Plug',
            expert: "Engine Expert",
            fb: icon1,
            in: icon2,
            tw: icon3,
            ln: icon4,
        },

    ]
    console.log(cardData);
    return (
        <Carousel>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel>
    );
};

export default Card;