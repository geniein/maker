import { CardList } from './styles'
import React, { FC, useEffect, useState } from 'react'
import Card from '@components/Card'
import axios from 'axios';

interface Props {
    contentCode: string;
}

const SubContents:FC<Props> = ({contentCode}) => {
    const [contentList,setContentList] =useState<any>(undefined);


    useEffect(() => {
        axios.get(`/api/item-contents/list/${contentCode}/ALL`)
        .then((res)=>{            
            setContentList(res.data)
        }); 
        //api/item-reviews      
        // axios.get('/api/item-reviews')
        // .then((res)=>{            
        //     setReviewList(res.data)
        // }); 
    }, []);


    return (
        <CardList>
            {contentList?.map((val:any, i:number) =>{                    
                return <Card key={val.id} id={val.uk} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'content'}/>
                    })} 
        </CardList>
    )
}

export default SubContents
