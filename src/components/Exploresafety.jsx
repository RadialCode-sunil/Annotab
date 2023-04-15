import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sliderprops from './Sliderprops'
import exploreimg10 from '../assets/img/png/exploreimg10.png'
import exploreimg11 from '../assets/img/png/exploreimg11.png'
import exploreimg12 from '../assets/img/png/exploreimg12.png'
import Green_btn from './Green_btn'
export const Exploresafety = () => {
    return (
        <Container className='pb-5 mb-lg-5'>
            <div>
                <Sliderprops heading="Explore Safety" secondhalf="&" thirdHalf="Security Use Cases" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={exploreimg10} sliderimg2={exploreimg11} sliderimg3={exploreimg12} smallheading1="Venenatis ullamcorper" smallheading2="Quis" smallheading3="Nec eu" smallline1="Quisque platea nec leo neque pellentesque. Vitae leo massa sapien purus. Accumsan." smallline2="Commodo pharetra nunc nisl risus ultrices." smallline3="Tellus arcu aliquam facilisis ut egestas nibh." smallline4="Nisl volutpat purus massa orci tincidunt." smallline5="Ut aliquam eget quis purus. Adipiscing" smallline6="Lectus aliquet lectus elit adipiscing vel sed justo eget vestibulum. Diam proin arcu." smallline7="Sed ac ipsum faucibus vitae in. Interdum in." smallline8="Lacus sagittis purus mi vitae tellus." smallline9="Elit euismod aenean vehicula libero consequat pellentesque viverra. Vivamus." />
            </div>
            <div className=' d-flex justify-content-center pt-5'>
                <Green_btn any_text="Explore" btn_id="explore_style" />
            </div>
        </Container>
    )
}
