import Card from '@components/Card';
import React from 'react'
import {CardList, Container} from './styles';
import {Notice, SubTitle} from './SubContent';

const Content = () => {

const mockCardList = [
    {
        img : "/dist/images/castle.jpg",
        title : "CASTLE",        
        text : "CASTLE BLACK",
        price : "40,000"
    },
    {
        img : "/dist/images/uyuni.jpg",
        title : "UYUNI",        
        text : "UYUNI DESERT",
        price : "50,000"
    },
    {
        img : "/dist/images/cloud.jpg",
        title : "CLOUD",        
        text : "AWESOME CLOUD",
        price : "40,000"
    },
    {
        img : "/dist/images/new.jpg",
        title : "NEW",        
        text : "BRAND NEW",
        price : "90,000"
    },
]

    return (
        <Container>            
            <Notice/>
            <SubTitle text={['CUSTOME SERVICE', 'MAKER is for CUSTOMER']}/>                        
            <SubTitle text={['BEST SERVICE', 'BEST SERVICE LIST']}/> 
            <CardList>
                {mockCardList.map((val:any) =>{
                    return <Card img={val.img} title={val.title} text={val.text} price={val.price}/>
                })} 
            </CardList>                   
        </Container>
    )
}

export default Content
