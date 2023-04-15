import React from 'react'
import footer_logo from '../assets/img/png/footer_logo.png'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyNew = () => {
    return (
        <section>
            <Container className='pt-4'>
                <Row >
                    <Col xl={3} xs={12} ><ul className='ps-0'>
                        <a href="#"><img src={footer_logo} alt="logo" /></a>
                        <p className='ff_Book fs_sm grey pt-4'>Feugiat tempor sagittis set dis nisl est.  at Malesuada in tortor cras dapibus.</p>
                        <li className='mt-5'>
                            <a className='footer_img ' href="#"><svg className='footer_img' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M42.9999 0H0V42.9999H42.9999V0ZM37.6092 10.7942C37.8116 10.9295 37.9694 11.1218 38.0625 11.3467C38.1558 11.5716 38.1803 11.8191 38.1329 12.0579C38.0855 12.2967 37.9684 12.5161 37.7963 12.6884L33.1943 17.2888C32.2665 28.0622 23.181 36.4353 12.3077 36.4353C10.0736 36.4353 8.23189 36.0814 6.83791 35.3829C5.71011 34.8182 5.24853 34.2135 5.13313 34.0412C5.03023 33.8869 4.96354 33.7113 4.93803 33.5276C4.91253 33.3439 4.92886 33.1568 4.98583 32.9803C5.04279 32.8038 5.1389 32.6424 5.26698 32.5083C5.39507 32.3742 5.55181 32.2707 5.7255 32.2056L5.72564 32.2056C5.77381 32.1871 9.45773 30.7702 11.7984 28.076C10.4989 27.0076 9.36443 25.7529 8.43191 24.3526C6.51942 21.52 4.38383 16.5995 5.04697 9.24649C5.06784 9.01285 5.15504 8.79003 5.2983 8.60429C5.44156 8.41854 5.63492 8.2776 5.8556 8.19806C6.07628 8.11852 6.31509 8.10369 6.54391 8.15532C6.77273 8.20695 6.98203 8.3229 7.14717 8.4895C7.20102 8.54335 12.2677 13.5823 18.4621 15.2163V14.2793C18.4598 13.2969 18.654 12.3239 19.0331 11.4176C19.4123 10.5113 19.9688 9.68996 20.67 9.00185C21.3513 8.32202 22.1617 7.78532 23.0535 7.42332C23.9453 7.06132 24.9005 6.88133 25.8628 6.89396C27.1546 6.9067 28.4211 7.25346 29.5391 7.90052C30.6572 8.54759 31.5888 9.47295 32.2435 10.5866H36.9254C37.1689 10.5867 37.4069 10.6589 37.6092 10.7942ZM30.7818 16.6626C30.8008 16.3644 30.9277 16.0833 31.1387 15.8718L33.9513 13.0484H31.4895C31.2503 13.0485 31.0161 12.9788 30.8158 12.8479C30.6155 12.717 30.4577 12.5306 30.3617 12.3114C29.6001 10.5682 27.7799 9.38035 25.8321 9.35573C25.1958 9.34747 24.5644 9.46685 23.975 9.70681C23.3857 9.94677 22.8505 10.3024 22.401 10.7528C21.932 11.2124 21.5598 11.7612 21.3061 12.3668C21.0525 12.9724 20.9225 13.6227 20.9239 14.2793V16.7411C20.9235 16.9198 20.8841 17.0963 20.8086 17.2582C20.7331 17.4202 20.6233 17.5638 20.4866 17.6791C20.35 17.7943 20.19 17.8784 20.0176 17.9255C19.8452 17.9726 19.6646 17.9817 19.4884 17.952C14.3463 17.0873 9.84589 13.9839 7.38412 11.9837C7.39797 22.7016 14.0817 26.7128 14.154 26.7543C14.2997 26.8385 14.4266 26.9515 14.5269 27.0866C14.6271 27.2217 14.6986 27.3759 14.737 27.5397C14.7754 27.7035 14.7797 27.8734 14.7498 28.0389C14.72 28.2045 14.6565 28.3622 14.5633 28.5022C12.9754 30.884 10.506 32.538 8.73502 33.4996C9.53817 33.7581 10.6829 33.9735 12.3077 33.9735C22.044 33.9735 30.1556 26.3697 30.7818 16.6626Z" fill="#00FFCC" />
                            </svg>
                            </a><a className='ms-3 footer_img' href="#"><svg className='footer_img' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M42.9999 0H0V42.9999H42.9999V0ZM7.1054 16.4972V36.3819H13.2797V16.4972H7.1054ZM7.66321 12.7323C8.33403 13.4043 9.24386 13.7818 10.1925 13.7818C11.1412 13.7818 12.0511 13.4043 12.7219 12.7323C13.3927 12.0603 13.7696 11.1488 13.7696 10.1984C13.7696 9.24805 13.3927 8.33659 12.7219 7.66457C12.0511 6.99255 11.1412 6.61501 10.1925 6.61501C9.24386 6.61501 8.33403 6.99255 7.66321 7.66457C6.99239 8.33659 6.61552 9.24805 6.61552 10.1984C6.61552 11.1488 6.99239 12.0603 7.66321 12.7323ZM30.2174 36.3819H36.3847L36.3824 25.4789C36.3824 20.1223 35.2294 16.0064 28.9811 16.0064C25.9841 16.0064 23.9691 17.6546 23.1488 19.2171H23.0633V16.4995H17.1479V36.3842H23.3106V26.5507C23.3106 23.9557 23.7981 21.4417 27.0101 21.4417C30.1758 21.4417 30.2174 24.4071 30.2174 26.7127V36.3819Z" fill="#00FFCC" />
                            </svg>
                            </a>
                        </li>
                    </ul></Col>
                    <Col xl={9} xs={12} className='pt-4'>
                        <Row>
                            <Col md={3} sm={6} xs={12} className='d-flex justify-content-xl-center' id='ul_1'>
                                <ul className=' pt-3 pt-lg-0 ps-0  '>
                                    <li>
                                        <p className='ff_Book fs_sm white '>Products</p>
                                    </li>
                                    <li className='pt-lg-3 pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Annotab Studio</a></li>
                                </ul>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='d-flex align-items-xl-end justify-content-xl-end' id='ul_2'>
                                <ul className='ps-0 text-nowrap'>
                                    <li>
                                        <p className='ff_Book fs_sm white pt-3 pt-lg-0'>Solutions</p>
                                    </li>
                                    <li className='pt-lg-3 pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Healthcare <span className=' ff_arial'>&</span> Medicine</a></li>
                                    <li className='pt-2'>
                                        <Link to="/Manufacturing">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Manufacturing</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Agriculture">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Agriculture</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Aerospace">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Aerospace <span className=' ff_arial'>&</span> Defense</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Automotive">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Automotive</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Banking">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Banking <span className=' ff_arial'>&</span> Finance</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Transportation">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Transportation</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Oil">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Oil <span className=' ff_arial'>&</span> Gas</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Retail">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Retail <span className=' ff_arial'>&</span> Ecommerce</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Safety">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Safety <span className=' ff_arial'>&</span> Security</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Telecommunications">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Telecommunications</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/Utilities">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Utilities</a>
                                        </Link>
                                    </li>
                                </ul></Col>
                            <Col md={3} sm={6} xs={12} className='d-flex flex-column align-items-sm-center align-items-xl-end' id='ul_3'>
                                <ul className='ps-0 ps-sm-3'>
                                    <li><p className='ff_Book fs_sm white pt-3 pt-lg-0'>Resources</p></li>
                                    <li className='pt-lg-3 pt-2'>
                                        <Link to="/Blogs">
                                            <a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Blogs</a>
                                        </Link>
                                    </li>
                                    <li className='pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Documentation</a></li>
                                </ul></Col>
                            <Col md={3} sm={6} xs={12} className='d-flex flex-column align-items-sm-center align-items-lg-end' id='ul_4'>
                                <ul className='ps-0 ps-lg-3'>
                                    <li><p className='ff_Book fs_sm white pt-3 pt-lg-0'>Company</p></li>
                                    <li className='pt-lg-3 pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">About us</a></li>
                                    <li className='pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">News</a></li>
                                    <li className='pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Data Security</a></li>
                                    <li className='pt-2'><a className='ff_Book fs_sm white opacity_7 footer_hover' href="#">Careers</a></li>
                                </ul></Col>
                        </Row>
                    </Col>
                </Row>
                <hr className='footer_hr mt-4' />
                <div className='d-flex flex-column align-items-center mt-4'>
                    <p className='ff_Book fs_sm white opacity_7'><span className=' ff_arial'>@</span> 2023 ANNOTAB. all rights reserved</p>
                </div>
            </Container >
        </section>
    )
}

export default MyNew