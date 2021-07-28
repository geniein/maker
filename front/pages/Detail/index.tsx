import Footer from '@components/Footer'
import Header from '@components/Header'
import Review from '@components/Review'
import TopMenu from '@components/TopMenu'
import React from 'react'
import { DetailTop } from './styles'

const Detail = () => {
    return (
        <div>
            <Header/>
            <TopMenu/> 
            <DetailTop>
                <form>
                    <div className='detail_src'>
                        <img src='/dist/images/castle.jpg' width='100%' height='auto'/>
                    </div>
                    <div className='detail_info'>
                        <p className='detail_title'>First Time w Maker</p>
                        <p className='detail_sub_price'>
                            20,000
                            <span className='discount_line'>50,000</span>
                        </p>
                        <p className='detail_tag'># Share the whole new wolrd Experience w us</p>
                        <div>
                            <ul className='detail_options'>
                                <li>
                                    <p className='detail_sub_title'>Watcher</p>
                                    <select className='detail_sub_select'>
                                        <option value='0'>No Options</option>
                                        <option value='1'>Special Options</option>
                                    </select>
                                </li>
                                <li>
                                    <p className='detail_sub_title'>Netflix</p>
                                    <select className='detail_sub_select'>
                                        <option value='0'>Premium Netflix</option>
                                        <option value='1'>Special Options</option>
                                    </select>
                                </li>
                                <li>
                                    <p className='detail_sub_title'>Youtube</p>
                                    <select className='detail_sub_select'>
                                        <option value='0'>Crazy Box</option>
                                        <option value='1'>Special Options</option>
                                    </select>
                                    <p className='detail_sub_info'>[Watch out] Careful yourself</p>
                                </li>
                            </ul>
                        </div>
                        <p className='detail_price'>20,000</p>
                        <div className='detail_btn'>Order</div>
                        <div className='detail_btn'>Cancel</div>
                    </div>
                </form>
            </DetailTop> 
            <Review/>                      
            <Footer/>
        </div>
    )
}

export default Detail
