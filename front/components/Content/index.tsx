import Card from '@components/Card';
import fetcher from '@utils/fetcher';
import React from 'react'
import useSWR from 'swr';
import {CardList, Container} from './styles';
import {Notice, SubTitle} from './SubContent';

const Content = () => {    
    // const mockCardList = [
    //     {
    //         thumnail : "/dist/images/castle.jpg",
    //         title : "CASTLE",        
    //         hashTag : "CASTLE BLACK",
    //         price : "40,000"
    //     },
    //     {
    //         thumnail : "/dist/images/uyuni.jpg",
    //         title : "UYUNI",        
    //         hashTag : "UYUNI DESERT",
    //         price : "50,000"
    //     },
    //     {
    //         thumnail : "/dist/images/cloud.jpg",
    //         title : "CLOUD",        
    //         hashTag : "AWESOME CLOUD",
    //         price : "40,000"
    //     },
    //     {
    //         thumnail : "/dist/images/new.jpg",
    //         title : "NEW",        
    //         hashTag : "BRAND NEW",
    //         price : "90,000"
    //     },
    // ]
    const {data:cardList} = useSWR('/api/item-contents', fetcher)
    
    if(cardList == undefined) return(<div>Processing...</div>)
    console.log(cardList)
    return (
        <Container>            
            <Notice/>
            <SubTitle text={['CUSTOME SERVICE', 'MAKER is for CUSTOMER']}/>                        
            <SubTitle text={['BEST SERVICE', 'BEST SERVICE LIST']} style={{                
                // background: '#70e1f5',
                // background: '-webkit-linear-gradient(to right, #ffd194, #70e1f5)',  
                background: 'linear-gradient(to right, #ffd194, #70e1f5)'
            }}/> 
            <CardList>
                {cardList.map((val:any, i:number) =>{
                    return <Card key={val.id} id={val.uk} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price}/>
                })} 
            </CardList>                   
        </Container>
    )
}

export default Content
