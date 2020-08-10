import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail'

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>        
      </Switch>
    </BrowserRouter>
  )
}