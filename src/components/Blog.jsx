import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/img/png/blog1.png'
import image2 from '../assets/img/png/blog2.png'
import image3 from '../assets/img/png/blog3.png'
export const Blog = () => {
    return (
        <Container>
            <p className='mb-0 ff_Medium grey fs_3xl'>Latest Updated blogs </p>
            <p className='ff_book pt-3 opacity_7 ff_sm grey mx_600 pb-5'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
            <div className='d_grid'>
                <div className='pb-2 blog_1'>
                    <span><img className='w-100' src={image1} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_2'>
                    <span><img className='w-100' src={image2} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_3'>
                    <span><img className='w-100' src={image3} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_4'>
                    <span><img className='w-100' src={image1} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_5'>
                    <span><img className='w-100' src={image2} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_6'>
                    <span><img className='w-100' src={image3} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_7'>
                    <span><img className='w-100' src={image1} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_8'>
                    <span><img className='w-100' src={image2} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_9'>
                    <span><img className='w-100' src={image3} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_10'>
                    <span><img className='w-100' src={image1} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_11'>
                    <span><img className='w-100' src={image2} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
                <div className='pb-2 blog_12'>
                    <span><img className='w-100' src={image3} alt="" /></span>
                    <p className=' ff_Medium fs_lg mb-0 text-white pt-4'>Bibendum sollicitudin</p>
                    <p className=' ff_Book text-white'>Apr 10, 2023</p>
                </div>
            </div>
        </Container>
    )
}
