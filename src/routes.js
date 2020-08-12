import React, { Suspense } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));

export default function Router(){
  return(
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>        
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}