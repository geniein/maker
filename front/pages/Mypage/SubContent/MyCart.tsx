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
    const onClickCartItem = useCallback((id:number) => {
              history.push(`/workspace/detail/${id}`);              
            },[])
            console.log(cartList);    
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
                <div style={{display:'inline-flex'}}>
                    <div className='title' >Total Amount </div>                                             
                    <div className='title' style={{textAlign:'right'}}>{cartList?.reduce((a:any,b:any)=> a + b.price,0)}</div>
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
