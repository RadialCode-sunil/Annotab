import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sliderprops from './Sliderprops'
import exploreimg10 from '../assets/img/png/exploreimg10.png'
import exploreimg11 from '../assets/img/png/exploreimg11.png'
import exploreimg12 from '../assets/img/png/exploreimg12.png'
import Green_btn from './Green_btn'
export const Exploresafety = () => {
    return (
        <Container>
            <div>
                <Sliderprops heading="Explore Safety & Security Use Cases" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={exploreimg10} sliderimg2={exploreimg11} sliderimg3={exploreimg12} smallheading1="Venenatis ullamcorper" smallheading2="Quis" smallheading3="Nec eu" />
            </div>
            <div className=' d-flex justify-content-center pt-5'>
                <Green_btn any_text="Explore" btn_id="explore_style" />
            </div>
        </Container>
    )
}
