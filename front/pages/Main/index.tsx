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
            <Carousel images={["/dist/images/cloud.jpeg","/dist/images/new.jpeg"]}/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Main
