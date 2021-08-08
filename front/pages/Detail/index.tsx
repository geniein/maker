import Footer from '@components/Footer'
import Header from '@components/Header'
import Review from '@components/Review'
import TopMenu from '@components/TopMenu'
import fetcher from '@utils/fetcher'
import axios from 'axios'
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
    
    const {category, title, content, hashTag, price,srcPath, thumbnail, uk, discount} = data[0];

    const onClickAddCart = () =>{
        axios.post('/api/item-carts/addItemCart',{
            ...data[0],
            userId:'ingenie',
            itemCount: 1,
            options:"optipns",
            contentId:uk
        }).then((res)=>{
            if(res.data) alert('Item added in the cart.');
        }).catch((err)=>{
            console.log(err);
        });
    }
    return (
        <div>
            <Header/>
            <TopMenu/> 
            <DetailTop>                
                    <div className='detail_src'>
                        <img src={thumbnail} />
                    </div>
                    <div style={{width:'5%'}}>

                    </div>
                    <div className='detail_info'>
                        <div className='detail_title'>{title}</div> {/* First Time w Maker */}
                        <div className='detail_sub_price'>
                            {discount === 0 ? price : price * (discount*0.01)}
                            <span className='discount_line'>{price}</span>
                        </div>
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
                                </li>                                
                            </ul>
                        </div>
                        <p className='detail_sub_info'>[Watch out] Careful yourself</p>
                        <p className='detail_price'>{discount === 0 ? price : price * (discount*0.01)}</p>
                        <DetailBtnWrap>
                            <div className='detail_btn' onClick={()=>history.push('/order',{contentId: uk})}>Order</div>
                            <div className='detail_btn' onClick={onClickAddCart}>Add Cart</div>                                                
                        </DetailBtnWrap>
                    </div>                
            </DetailTop> 
            <Review ck={uk}/>                      
            <Footer/>
        </div>
    )
}

export default Detail
