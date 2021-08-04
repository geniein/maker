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
            <Carousel images={["/public/castle.jpg","/public/uyuni.jpg","/public/cloud.jpg","/public/new.jpg"]} stlyes={{width:'100%', height:'500px'}}/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Main
