
import Card from '@components/Card'
import Carousel from '@components/Carousel'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import {MainWrap, CardList, MainContainer, MainMenu } from './styles'
import { Notice, SubTitle } from './SubContent'
import SubContents from './SubContent/SubContents'

const Main = () => {
    const history = useHistory();
    const [contentList,setContentList] =useState<any>(undefined);
    const [reviewList,setReviewList] =useState<any>(undefined);
    // const [menuState, setMenuState] = useState<string>('adver'); //adver, letter, invite
    
    useEffect(() => {
        axios.get(`/api/item-contents/list/adver/ALL`)
        .then((res)=>{            
            setContentList(res.data)
        }); 
        //api/item-reviews      
        axios.get('/api/item-reviews')
        .then((res)=>{            
            setReviewList(res.data)
        }); 
    }, []);

    const memoCarousel = useMemo(()=>{
    return <Carousel images={["/public/new.jpg","/public/castle.jpg","/public/uyuni.jpg","/public/cloud.jpg"]} stlyes={{width:'100%', height:'500px'}} autoplay={true}/>
    },[])
    const onClickPage = (pagePath:string,pageState:string) =>{
        history.push({
            pathname: `/workspace${pagePath}`,
            state:{currPage:pageState}
        })
    }
    const onClickMainMenu = useCallback((menuState : string) =>{
        axios.get(`/api/item-contents/list/${menuState}/ALL`)
        .then((res)=>{            
            setContentList(res.data)
        }); 
    },[]); 
    // useEffect(() => {        
    //     axios.get(`/api/item-contents/list/adver/${currPage}`).then((res)=>{
    //         setAdList(res.data);
    //     })        
    // }, [currPage])

    if(contentList == undefined || reviewList == undefined) return(<div>Processing...</div>)

    return (
        <div>            
            <MainWrap>
                {memoCarousel}
                <Notice/>
                <SubTitle text={['CUSTOME SERVICE', 'MAKER is for CUSTOMER']}/>                        
                <SubTitle text={['BEST SERVICE', 'BEST SERVICE LIST']} style={{                
                    // background: '#70e1f5',
                    // background: '-webkit-linear-gradient(to right, #ffd194, #70e1f5)',  
                    background: 'linear-gradient(to right, #ffd194, #70e1f5)'
                }}/> 
                <MainContainer>
                    <MainMenu>
                        <li onClick={()=>onClickMainMenu('adver')}>광고영상</li>
                        <li onClick={()=>onClickMainMenu('letter')}>영상편지</li>
                        <li onClick={()=>onClickMainMenu('invite')}>모바일초대장</li>                    
                    </MainMenu>
                    <CardList>
                        {contentList?.map((val:any, idx:number) =>{                    
                            return <Card key={idx} id={val.contentId} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'content'}/>
                        })} 
                    </CardList>
                    {/* <SubContents contentCode={'adver'}/> */}
                </MainContainer>
                <SubTitle text={['BEST REVIEW']} style={{                
                        // background: '#70e1f5',
                        // background: '-webkit-linear-gradient(to right, #ffd194, #70e1f5)',  
                        background: 'linear-gradient(to right, #ffd194, #70e1f5)'
                    }}/>
                <MainContainer>                    
                    <CardList>
                        {reviewList?.map((val:any, idx:number) =>{                    
                            return <Card key={idx} id={val.reviewId} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'review'}/>
                        })} 
                    </CardList>                    
                </MainContainer> 
            </MainWrap>            
        </div>
    )
}

export default Main
