import Carousel from '@components/Carousel'
import Content from '@components/Content'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import React from 'react'

const Main = () => {
    return (
        <div>
            <Header/>
            <TopMenu/>
            <Carousel images={["/dist/images/castle.jpg","/dist/images/uyuni.jpg","/dist/images/cloud.jpg","/dist/images/new.jpg"]} stlyes={{width:'100%'}}/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Main
