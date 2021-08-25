import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import AddContent from '@pages/AddContent'
import AddReview from '@pages/AddReview'
import AdverContent from '@pages/AdverContent'
import Cart from '@pages/Cart'
import CustomService from '@pages/CustomService'
import Detail from '@pages/Detail'
import Event from '@pages/Event'
import InviteContent from '@pages/InviteContent'
import LetterContent from '@pages/LetterContent'
import Login from '@pages/Login'
import Main from '@pages/Main'
import Mypage from '@pages/Mypage'
import Order from '@pages/Order'
import Signup from '@pages/Signup'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Route, Switch } from 'react-router'

const Workspace =() => {
    const isMobile = useMediaQuery({query:"(max-width: 576px)"})    
    return (
        <div>
            <Header/>
            {!isMobile&&<TopMenu/>}
                <Switch>
                    <Route path="/workspace/login" component={Login} />
                    <Route path="/workspace/signup" component={Signup} />
                    <Route path="/workspace/main" component={Main} />
                    <Route path="/workspace/mypage" component={Mypage} />
                    <Route path="/workspace/detail/:id" component={Detail} />
                    <Route path="/workspace/addcontent" component={AddContent} />
                    <Route path="/workspace/addreview" component={AddReview} />
                    <Route path="/workspace/customservice" component={CustomService} />
                    <Route path="/workspace/order" component={Order} />
                    <Route path="/workspace/user/cart" component={Cart} />
                    <Route path="/workspace/contentlist/adver" component={AdverContent} />
                    <Route path="/workspace/contentlist/letter" component={LetterContent} />
                    <Route path="/workspace/contentlist/invite" component={InviteContent} />
                    <Route path="/workspace/event" component={Event} />
                </Switch>
            <Footer/>            
        </div>
    )
}

export default Workspace
