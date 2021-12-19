import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { MyWrap, CartTable, CartWrap, RemoveBtn, PayBtn, NoItem } from './styles'

const MyCart = () => {

    const [cartList, setCartList] = useState<any>([]);
    const history = useHistory();
    
    useEffect(() => {
        getCartList();     
    }, [])    
    const getCartList = () =>{
        axios.get('/api/item-carts').then((res)=>{
            setCartList(res.data);
        }).catch((err)=>{
            console.log(err);
        })  
    }
    const onClickRemoveCart = (contentId:string) =>{
        axios.delete(`/api/item-carts/remove/${contentId}`)
        .then((res)=>{
            console.log(res);
            getCartList();
        }).catch((err)=>{
            console.log(err);
        })
    }    
    const onClickCartItem = useCallback((id:number) => {
        history.push(`/workspace/detail/${id}`);              
    },[])

    return (
        <MyWrap>
            <p className='title'>장바구니 <span>helloworld</span></p>                               
            {cartList.length >0 && <CartWrap>
                {/* <div className='title'>Cart</div> */}                
                <CartTable>
                        <tbody>
                            {cartList.map((val:any,idx:number) =>{
                                return (
                                <tr key={idx}>
                                    <td className='cart_src' onClick={()=>onClickCartItem(val.contentId)}>
                                        <img src={val.thumbnail}/>
                                    </td>
                                    <td className='cart_title'>                                
                                        {val.title}
                                    </td>
                                    <td className='cart_options'>
                                        {(val.dvdService == '0' && val.dvdService == '0') && <p>DVD 서비스</p>}
                                        {val.dvdService == '1' && <p>DVD 서비스</p>}
                                        {val.usbService == '1' && <p>USB 서비스</p>}                                        
                                    </td>
                                    <td className='cart_price'>
                                        {val.price}
                                    </td>
                                    <td className='cart_remove'>
                                        <RemoveBtn onClick={()=>onClickRemoveCart(val.contentId)}>Remove</RemoveBtn>
                                    </td>
                                </tr>
                                )
                            })}                            
                        </tbody>
                    </CartTable>                             
                <div style={{display:'inline-flex'}}>
                    <div className='title' >Total Amount </div>                                             
                    <div className='title' style={{textAlign:'right'}}>{cartList?.reduce((a:any,b:any)=> a + (b.price + b.dvdService * 20000 + b.usbService*20000),0)}</div>
                </div> 
                <div style={{width:'100%', display: 'inline-flex', justifyContent: 'center'}}>
                    <PayBtn>Pay</PayBtn>
                </div>               
            </CartWrap>
            }
            {cartList.length ==0 && <NoItem>장바구니 아이템이 없습니다.</NoItem>} 
           
        </MyWrap>
    )
}

export default MyCart;
