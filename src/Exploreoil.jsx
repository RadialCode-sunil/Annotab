import React from 'react'
import oil_1 from './assets/img/png/oil_1.png';
import oil_2 from './assets/img/png/oil_2.png';
import oil_3 from './assets/img/png/oil_3.png';
import oil_4 from './assets/img/png/oil_4.png';
import oil_5 from './assets/img/png/oil_5.png';
import oil_6 from './assets/img/png/oil_6.png';
import Exploreaerospaces from './components/Exploreaerospaces';
const Exploreoil = () => {
    return (
        <div> <Exploreaerospaces max="max_width_480" Aerospace="Explore Oil & Gas Use Cases" gridimg1={oil_1} gridimg2={oil_2} gridimg3={oil_3} gridimg4={oil_4} gridimg5={oil_5} gridimg6={oil_6} /></div>
    )
}

export default Exploreoil