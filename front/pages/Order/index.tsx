import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { OrderInfoWrap, OrderTable, OrderWrap, PayBtn, PaySelector } from './styles'

interface Props{
    contentId: string;
    dvdService: string;
    usbService: string;
}

const Order:FC<Props> = ({contentId, dvdService, usbService}) => {   
    const location = useLocation<any>();
    const [detailInfo, setDetailInfo] = useState<any>(undefined);
    
    contentId = contentId ?? location.state.contentId;
    dvdService = dvdService ?? location.state.dvdService;
    usbService = usbService ?? location.state.usbService;
    
    useEffect(() => {
        axios.get(`/api/item-contents/one/${contentId}`).then((res)=>{              
            setDetailInfo(res.data[0]);
        })               
    }, []);

    const onClickPay = useCallback(
        () => {
            axios.post('/api/item-orders',{
                contentId:detailInfo.contentId,
                price:detailInfo.price,
                dvdService,
                usbService
            })
            .then((res)=>{
                console.log(res)
            })
        },
        [detailInfo],
    )

    if(detailInfo===undefined) return (<div> Processing</div>);

    return (
        <OrderWrap>            
            <OrderInfoWrap>
                <div className='title'>Order</div>
                <OrderTable>
                    <tbody>
                        <tr>
                            <td className='order_src'>
                                <img src={detailInfo?.thumbnail}/>
                            </td>
                            <td className='order_title'>                                
                                {detailInfo?.title}
                            </td>
                            <td className='order_options'>
                                {!(dvdService || usbService) && <p>없음</p>}
                                {dvdService=='1' && <p>DVD 서비스</p>}                                
                                {usbService=='1' && <p>USB 서비스</p>}
                            </td>
                        </tr>
                    </tbody>
                </OrderTable>
                <div className='title'>PayInfo</div>
                <OrderTable>
                    <tbody>
                        <tr>
                            <td className='pay_title'>
                                총상품가격 
                            </td>                            
                            <td className='pay_info'>
                                {detailInfo?.price + (dvdService=='1'? 20000 : 0) + (usbService=='1'? 20000 : 0)}
                            </td>
                        </tr>                      
                        <tr>
                            <td className='pay_title'>
                                총결제금액 
                            </td>                            
                            <td className='pay_info'>
                                {detailInfo?.price + (dvdService=='1'? 20000 : 0) + (usbService=='1'? 20000 : 0)}
                            </td>
                        </tr>
                        <tr>
                            <td className='pay_title'>
                                결제방법 
                            </td>                            
                            <td className='pay_type'>
                                <PaySelector>
                                    <ul>
                                        <li>
                                            <input type='radio'></input>
                                            계좌이체
                                        </li>
                                        <li>
                                            <input type='radio'></input>
                                            신용/체크카드
                                        </li>
                                    </ul>                                    
                                </PaySelector>
                                <div style={{display:'block'}}>
                                    <div className='pay_content'>은행선택 &nbsp;&nbsp;
                                        <select>
                                            <option value='1'>농협은행</option>
                                        </select>
                                    </div>
                                    <div className='pay_desc'>
                                        <input type='checkbox'></input>
                                        선택한 결제수단으로 향후 결제 이용에 동의합니다. (선택)
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </OrderTable>              
            </OrderInfoWrap> 
            <div style={{width:'100%', display: 'inline-flex', justifyContent: 'center'}}>
                    <PayBtn onClick={onClickPay}>Pay</PayBtn>
            </div>            
        </OrderWrap>
    )
}

export default Order
