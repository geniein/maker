import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from "@loadable/component";
declare global{
  interface Window{
    Kakao:any; //Kakao Authentication API    
    clipboardData:any //clipboard
  }
}

const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
    return(      
        <Switch>
          <Redirect exact path="/" to="/workspace/main" />                    
          <Route path="/workspace/:workspace" component={Workspace} /> 
          {/* <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} /> 
          <Route path="/main" component={Main} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/addcontent" component={AddContent} />
          <Route path="/customservice" component={CustomService} />
          <Route path="/order" component={Order} />
          <Route path="/user/cart" component={Cart} />
          <Route path="/contentlist/adver" component={AdverContent} />
          <Route path="/contentlist/letter" component={LetterContent} />
          <Route path="/contentlist/invite" component={InviteContent} /> */}
        </Switch>           
    );
}

export default App;
