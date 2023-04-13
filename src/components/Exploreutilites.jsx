import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sliderprops from './Sliderprops'
import exploreimg13 from '../assets/img/png/exploreimg13.png'
import exploreimg14 from '../assets/img/png/exploreimg14.png'
import exploreimg15 from '../assets/img/png/exploreimg15.png'
import Green_btn from './Green_btn'
export const Exploreutilites = () => {
    return (
        <Container>
            <div>
                <Sliderprops heading="Explore Utilities Use Cases" max="min_w_374" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={exploreimg13} sliderimg2={exploreimg14} sliderimg3={exploreimg15} smallheading1="Venenatis ullamcorper" smallheading2="Quis" smallheading3="Nec eu" />
            </div>
            <div className=' d-flex justify-content-center pt-5'>
                <Green_btn any_text="Explore" btn_id="explore_style" />
            </div>
        </Container>
    )
}
