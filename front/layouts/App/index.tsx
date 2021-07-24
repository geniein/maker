import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '@pages/Main'

declare global{
  interface Window{
    Kakao:any; //Kakao Authentication API
  }
}

const App = () => {
    return(
      <div>
        <Switch>
          <Main/>
        </Switch>
      </div>
    );
}

export default App;
