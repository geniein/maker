import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '@pages/Main'
import Login from '@pages/Login'
import Signup from '@pages/Signup';
import Detail from '@pages/Detail';
import AddContent from '@pages/AddContent';
import CustomService from '@pages/CustomService';
import Order from '@pages/Order';
import Cart from '@pages/Cart';
import AdverContent from '@pages/AdverContent';
import LetterContent from '@pages/LetterContent';
import InviteContent from '@pages/InviteContent';

declare global{
  interface Window{
    Kakao:any; //Kakao Authentication API
  }
}

const App = () => {
    return(
      <div>
        <Switch>
          <Redirect exact path="/" to="main" />          
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/addcontent" component={AddContent} />
          <Route path="/customservice" component={CustomService} />
          <Route path="/order" component={Order} />
          <Route path="/user/cart" component={Cart} />
          <Route path="/contentlist/adver" component={AdverContent} />
          <Route path="/contentlist/letter" component={LetterContent} />
          <Route path="/contentlist/invite" component={InviteContent} />
        </Switch>
      </div>
    );
}

export default App;
