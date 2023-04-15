import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sliderprops from './Sliderprops'
import exploreimg7 from '../assets/img/png/exploreimg7.png'
import exploreimg8 from '../assets/img/png/exploreimg8.png'
import exploreimg9 from '../assets/img/png/exploreimg9.png'
import Green_btn from './Green_btn'
export const Exploreretails = () => {
    return (
        <Container className='pb-5'>
            <div className='pb-5'>
                <Sliderprops heading="ExploreRetail" secondhalf="&" thirdHalf="Ecommerce Use Cases" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={exploreimg7} sliderimg2={exploreimg8} sliderimg3={exploreimg9} smallheading1="Venenatis ullamcorper" smallheading2="Quis" smallheading3="Nec eu" />

            </div>
            <div className=' d-flex justify-content-center pt-5'>
                <Green_btn any_text="Explore" btn_id="explore_style" />
            </div>
        </Container>

    )
}
