import React from 'react'
import science_1 from './assets/img/png/science_1.png';
import science_2 from './assets/img/png/science_2.png';
import science_3 from './assets/img/png/science_3.png';
import science_4 from './assets/img/png/science_4.png';
import science_5 from './assets/img/png/science_5.png';
import science_6 from './assets/img/png/science_6.png';
import Exploreaerospaces from './components/Exploreaerospaces';

const Science = () => {
  return (
      <div>        <Exploreaerospaces max="max_width_704" Aerospace="Explore Telecommunications Use Cases " gridimg1={science_1} gridimg2={science_2} gridimg3={science_3} gridimg4={science_4} gridimg5={science_5} gridimg6={science_6} />
</div>
  )
}

export default Science