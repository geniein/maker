import Footer from '@components/Footer'
import Header from '@components/Header'
import Review from '@components/Review'
import TopMenu from '@components/TopMenu'
import fetcher from '@utils/fetcher'
import React, { FC } from 'react'
import { useHistory, useParams } from 'react-router'
import useSWR from 'swr'
import { DetailBtnWrap, DetailTop } from './styles'

interface Props{
    user:string;
}

const Detail:FC<Props> = () => {
    const { id:cardId } = useParams<{ id: string }>();
    const {data} = useSWR(`/api/item-contents/${cardId}`,fetcher);    
    const history = useHistory();
    
    if(data ===undefined) return(<div>Processing</div>); //data loading...
    
    const {category, title, content, hashTag, price,srcPath, thumbnail, uk} = data[0];

    return (
        <div>
            <Header/>
            <TopMenu/> 
            <DetailTop>
                <form>
                    <div className='detail_src'>
                        <img src={thumbnail} />
                    </div>
                    <div className='detail_info'>
                        <p className='detail_title'>{title}</p> {/* First Time w Maker */}
                        <p className='detail_sub_price'>
                            {price * 0.5}
                            <span className='discount_line'>{price}</span>
                        </p>
                            <p className='detail_tag'>{hashTag}</p>
                        {/* # Share the whole new wolrd Experience w us */}
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
                        <DetailBtnWrap>
                            <div className='detail_btn'>Order</div>
                            <div className='detail_btn'>Cancel</div>                                                
                        </DetailBtnWrap>
                    </div>
                </form>
            </DetailTop> 
            <Review ck={uk}/>                      
            <Footer/>
        </div>
    )
}

export default Detail
