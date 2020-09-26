import React from 'react';
import './App.css';

import { Button } from '@material-ui/core';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import SignIn from './components/Auth/signin.component';
import SignUp from './components/Auth/signup.component';
import Infinity from './components/infinitycss.component';

export default function App() {
  // const history = useHistory();
  // console.log(history);

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/infinity" component={Infinity} />

        </Switch>

      </BrowserRouter>


    </div>
  );
}


