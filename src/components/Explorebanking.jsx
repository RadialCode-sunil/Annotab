import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sliderprops from './Sliderprops'
import exploreimg4 from '../assets/img/png/exploreimg4.png'
import exploreimg5 from '../assets/img/png/exploreimg5.png'
import exploreimg6 from '../assets/img/png/exploreimg6.png'
import Green_btn from './Green_btn'
export const Explorebanking = () => {
    return (
        <Container className='pb-5 mb-lg-5'>
            <div>
                <Sliderprops heading="Explore Banking" secondhalf="&" thirdHalf="Finance Use Cases" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={exploreimg4} sliderimg2={exploreimg5} sliderimg3={exploreimg6} smallheading1="Libero" smallheading2="Ut ipsum" smallheading3="Vitae nibh" smallline1="Tellus facilisi bibendum adipiscing vel. Massa vel eget est vitae eros aliquam." smallline2="Nisl fringilla egestas amet diam egestas mi." smallline3="Id suspendisse tristique ut ante" smallline4="Sapien nam ac euismod convallis sed id." smallline5="Duis aliquam et ac mi sapien nulla congue." smallline6="Volutpat netus arcu duis duis consectetur pulvinar aliquam tortor. Aliquet felis sit." smallline7="Aliquet in integer sed tellus nisi tristique." smallline8="Etiam sollicitudin nisi sed vel. Vel viverra eu." smallline9="Sed curabitur turpis cursus nunc mattis eu consequat cras enim. Tempus tristique." />
            </div>
            <div className=' d-flex justify-content-center pt-5'>
                <Green_btn any_text="Explore" btn_id="explore_style" />
            </div>
</Container>
    )
}
