import Card from '@components/Card';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import {CardList, Container} from './styles';
import {Notice, SubTitle} from './SubContent';

const Content = () => {       
    //const {data:cardList} = useSWR('/api/item-contents', fetcher)
    const [contentList,setContentList] =useState<any>(undefined);
    const [reviewList,setReviewList] =useState<any>(undefined);

    useEffect( () => {
        axios.get('/api/item-contents')
        .then((res)=>{            
            setContentList(res.data)
        }); 
        //api/item-reviews      
        axios.get('/api/item-reviews')
        .then((res)=>{            
            setReviewList(res.data)
        }); 
    }, []);
    
    if(contentList == undefined || reviewList == undefined) return(<div>Processing...</div>)

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
                {contentList?.map((val:any, i:number) =>{                    
                    return <Card key={val.id} id={val.uk} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'content'}/>
                })} 
            </CardList>
            <SubTitle text={['BEST REVIEW']} style={{                
                // background: '#70e1f5',
                // background: '-webkit-linear-gradient(to right, #ffd194, #70e1f5)',  
                background: 'linear-gradient(to right, #ffd194, #70e1f5)'
            }}/>
             <CardList>
                {reviewList?.map((val:any, i:number) =>{                    
                    return <Card key={val.id} id={val.uk} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'review'}/>
                })} 
            </CardList>                    
        </Container>
    )
}

export default Content
