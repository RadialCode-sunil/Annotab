import React from 'react'
import Sliderprops from './Sliderprops'
import exploreimg1 from '../assets/img/png/exploreimg1.png'
import exploreimg2 from '../assets/img/png/exploreimg2.png'
import exploreimg3 from '../assets/img/png/exploreimg3.png'
const Explore = () => {
    var Team_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: ".next",
        prevArrow: ".back",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
    };
    return (
        <div className='pb-5 mb-lg-5'>
            <Sliderprops heading="Explore Manufacturing Use Cases" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={exploreimg1} sliderimg2={exploreimg2} sliderimg3={exploreimg3} smallheading1="Sit donec" smallheading2="Commodo" smallheading3="Tellus turpis" />
        </div>
    )
}

export default Explore