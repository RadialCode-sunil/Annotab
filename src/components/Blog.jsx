import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/img/png/blog1.png'
import image2 from '../assets/img/png/blog2.png'
import image3 from '../assets/img/png/blog3.png'
import Green_btn from './Green_btn';
export const Blog = () => {
    return (
        <Container>
            <div className='d_grid'>
                <div className='pb-2 blog_1 '>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image1} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_2'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image2} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_3'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image3} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_4'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image1} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_5'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image2} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_6'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image3} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_7'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image1} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_8'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image2} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_9'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image3} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_1n'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image1} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_1n'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image2} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_1n'>
                    <div className='blog_box overflow-hidden'><img className='w-100' src={image3} alt="" /></div>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                
            </div>
            <div className=' text-center py-5  justify-content-center d-flex align-items-center'>
                <Green_btn any_text='View more' />

            </div>
        </Container>
    )
}
