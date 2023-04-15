import React from 'react'
import Exploreaerospaces from './Exploreaerospaces'
import aeroplane1 from '../assets/img/png/aeroplane_1.png';
import aeroplane2 from '../assets/img/png/aeroplane_2.png';
import aeroplane3 from '../assets/img/png/aeroplane_3.png';
import aeroplane4 from '../assets/img/png/aeroplane_4.png';
import aeroplane5 from '../assets/img/png/aeroplane_5.png';
import aeroplane6 from '../assets/img/png/aeroplane_6.png';
export const Defancegrid = () => {
    return (
        <div>
            <Exploreaerospaces maxW="max_width_703 " Aerospace="Explore Aerospace" secondAero="&" ThirdAero="Defense Use Cases" gridimg1={aeroplane1} gridimg2={aeroplane2} gridimg3={aeroplane3} gridimg4={aeroplane4} gridimg5={aeroplane5} gridimg6={aeroplane6} />
        </div>
    )
}
