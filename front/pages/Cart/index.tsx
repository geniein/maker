import Footer from '@components/Footer';
import Header from '@components/Header';
import TopMenu from '@components/TopMenu';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CartTable, CartWrap, RemoveBtn, PayBtn } from './styles';

const Cart = () =>{
    const [cartList, setCartList] = useState<any>(undefined);
    
    useEffect(() => {
        getCartList();     
    }, [])    
    const getCartList = () =>{
        axios.get('/api/item-carts/ingenie').then((res)=>{
            setCartList(res.data);
        }).catch((err)=>{
            console.log(err);
        })  
    }
    const onClickRemoveCart = (id:string) =>{
        axios.delete(`/api/item-carts/remove/${id}`)
        .then((res)=>{
            console.log(res);
            getCartList();
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            <Header/>
            <TopMenu/>
            <CartWrap>
                <div className='title'>Cart</div>
                {cartList && <CartTable>
                        <tbody>
                            {cartList.map((val:any,idx:number) =>{
                                return (
                                <tr key={idx}>
                                    <td className='cart_src'>
                                        <img src={val.thumbnail}/>
                                    </td>
                                    <td className='cart_title'>                                
                                        {val.title}
                                    </td>
                                    <td className='cart_options'>
                                        {val.options}
                                    </td>
                                    <td className='cart_price'>
                                        {val.price}
                                    </td>
                                    <td className='cart_remove'>
                                        <RemoveBtn onClick={()=>onClickRemoveCart(val.id)}>Remove</RemoveBtn>
                                    </td>
                                </tr>
                                )
                            })}                            
                        </tbody>
                    </CartTable>
                }
                {!cartList && <div>Processing</div>}
                <div style={{display:'inline-flex'}}>
                    <div className='title' >Total Amount </div>                                             
                    <div className='title' style={{textAlign:'right'}}>{cartList?.reduce((a:any,b:any)=> a + b.price,0)}</div>
                </div>                
            </CartWrap> 
            <div style={{width:'100%', display: 'inline-flex', justifyContent: 'center'}}>
                    <PayBtn>Pay</PayBtn>
            </div>

            <Footer/>            
        </div>
    )
}

export default Cart;
