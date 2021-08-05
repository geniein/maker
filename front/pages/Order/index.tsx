import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import React, { FC } from 'react'
import { OrderInfoWrap, OrderTable } from './styles'

interface Props{
    contentKey: string;
}

const Order:FC<Props> = ({contentKey}) => {    
    return (
        <div>
            <Header/>
            <TopMenu/>
            <OrderInfoWrap>
                <div className='title'>Order</div>
                <OrderTable>
                    <tbody>
                        <tr>
                            <th>
                                <img src=''/>
                            </th>
                            <th>
                                name
                            </th>
                            <th>
                                options
                            </th>
                        </tr>
                    </tbody>
                </OrderTable>
            </OrderInfoWrap> 
            <Footer/>
        </div>
    )
}

export default Order
