import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { OrderInfoWrap, OrderTable, PayBtn, PaySelector } from './styles'

interface Props{
    contentId: string;
    options: string[];
}

const Order:FC<Props> = ({contentId, options}) => {   
    const location = useLocation<any>();
    const [detailInfo, setDetailInfo] = useState<any>(undefined);
    contentId = contentId ?? location.state.contentId;
    
    useEffect(() => {
        axios.get(`/api/item-contents/one/${contentId}`).then((res)=>{                        
            setDetailInfo(res.data[0]);
        })               
    }, []);

    if(detailInfo===undefined) return (<div> Processing</div>);

    return (
        <div>            
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
                                options
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
                                {detailInfo?.price}
                            </td>
                        </tr>
                        <tr>
                            <td className='pay_title'>
                                할인쿠폰 
                            </td>                            
                            <td className='pay_info'>
                                List
                            </td>
                        </tr>
                        <tr>
                            <td className='pay_title'>
                                총결제금액 
                            </td>                            
                            <td className='pay_info'>
                                {detailInfo?.price}
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
                    <PayBtn>Pay</PayBtn>
            </div>            
        </div>
    )
}

export default Order
