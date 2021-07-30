import Footer from '@components/Footer'
import Header from '@components/Header'
import NewPost from '@components/NewPost'
import TopMenu from '@components/TopMenu'
import React from 'react'


const AddContent = () => {

    return (
        <div>
            <Header/>
            <TopMenu/>
            <div>                
                <NewPost/>                     
            </div>   
            <Footer/>
        </div>
    )
}

export default AddContent
