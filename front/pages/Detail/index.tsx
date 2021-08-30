import Footer from '@components/Footer'
import Header from '@components/Header'
import Review from '@components/Review'
import TopMenu from '@components/TopMenu'
import fetcher from '@utils/fetcher'
import axios from 'axios'
import React, { FC } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import useSWR from 'swr'
import { AdBanner, DetailBtnWrap, DetailMenu, DetailTop, DetailWrap, VideoWrap } from './styles'
import VideoJS from '@components/VideoJS'

interface Props{
    user:string;    
}

const Detail:FC<Props> = () => {
    const { id:cardId } = useParams<{ id: string }>();
    const {data} = useSWR(`/api/item-contents/one/${cardId}`,fetcher);    
    const [dvdService, setDvdService] = useState<any>(0);
    const [usbService, setUsbService] = useState<any>(0);

    const history = useHistory();
    
    if(data ===undefined) return(<div>Processing</div>); //data loading...
    
    const {category, title, content, hashTag, price,srcPath, thumbnail, contentId, discount} = data[0];

    const onClickOrder = () =>{
        axios.get('/api/users')
        .then(res=>{
            if(res.data !== false){
                history.push('/workspace/order',{contentId,dvdService,usbService})
            }else {
                alert('로그인해 주시기 바랍니다.');
            }
        }).catch(err=>{
            console.log(err);
        })        
    }
    const onClickAddCart = () =>{
        axios.post('/api/item-carts/addItemCart',{
            ...data[0],
            itemCount: 1,            
            contentId,
            dvdService,
            usbService
        }).then((res)=>{
            console.log(res.data);
            if(res.data) {alert('Item added in the cart.')}
            else alert('This Item is Already in the cart.');
        }).catch((err)=>{
            console.log(err);
            alert('로그인 해주시기 바랍니다.');
        });
    }    
    const videoJsOptions = { // lookup the options in the docs for more options
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        poster:thumbnail,
        sources: [{
          src: srcPath,
          type: 'video/mp4'
        }]
      }
    
    return (
        <DetailWrap>
            <DetailTop>                
                <div className='detail_src'>
                    {/* <img src={thumbnail} /> */}
                    {/* <video src={srcPath} controls /> */}
                    {/* <iframe width="560" 
                    height="315"
                    src={"https://www.youtube.com/embed/52wNPhtanSU"}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>                        
                    </iframe> */}
                    <VideoJS options={videoJsOptions}/>
                    <AdBanner>
                        AD Banner
                    </AdBanner>
                </div>              
                <div className='detail_info'>
                    <div className='detail_title'>{title}</div>
                    <div className='detail_sub_price'>
                        {discount === 0 ? price : price * (discount*0.01)}
                        <span className='discount_line'>{price}</span>
                    </div>
                        <p className='detail_tag'>{hashTag}</p>
                    {/* # Share the whole new wolrd Experience w us */}
                    <div>
                        <ul className='detail_options'>
                            <li>
                                <p className='detail_sub_title'>DVD서비스</p>
                                <select className='detail_sub_select' onChange={(e)=>setDvdService(e.target.value)}>
                                    <option value='0'>선택안함</option>
                                    <option value='1'>DVD 신청(20,000)</option>
                                </select>
                            </li>
                            <li>
                                <p className='detail_sub_title'>USB서비스</p>
                                <select className='detail_sub_select' onChange={(e)=>setUsbService(e.target.value)}>
                                    <option value='0'>선택안함</option>
                                    <option value='1'>USB 신청(20,000)</option>
                                </select>
                            </li>
                            {/* <li>
                                <p className='detail_sub_title'>Youtube</p>
                                <select className='detail_sub_select' onChange={(e)=>setDvdService(e.target.value)}>
                                    <option value='0'>Crazy Box</option>
                                    <option value='1'>Special Options</option>
                                </select>                                    
                            </li>                                 */}
                        </ul>
                    </div>
                    <p className='detail_sub_info'>[Watch out] Careful yourself</p>
                    <p className='detail_price'>{discount === 0 ? price : price * (discount*0.01)}</p>
                    <DetailBtnWrap>
                        <div className='detail_btn' onClick={onClickOrder}>Order</div>
                        <div className='detail_btn' onClick={onClickAddCart}>Add Cart</div>                                                
                    </DetailBtnWrap>
                </div>                
            </DetailTop>           
            <Review contentId={contentId}/>                      
            <DetailMenu>
                <ul>
                    <li >
                        상품정보                        
                    </li>
                    <li >
                        제작과정
                    </li>
                    <li >
                        환불 및 배송
                    </li>                    
                </ul>
            </DetailMenu>             
        </DetailWrap>
    )
}

export default Detail
