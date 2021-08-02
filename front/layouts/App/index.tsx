import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '@pages/Main'
import Login from '@pages/Login'
import Signup from '@pages/Signup';
import Detail from '@pages/Detail';
import AddContent from '@pages/AddContent';
import CustomService from '@pages/CustomService';

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
        </Switch>
      </div>
    );
}

export default App;
