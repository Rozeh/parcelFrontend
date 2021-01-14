import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/shared/Home';
import Sample from '../components/shared/sample/Sample';


const RouteComponent = () => {
    return(
        <div id="wrapper">
            <Route exact={true} path="/" component={ Home } />
            <Route path="/Sample" component={ Sample } />
        </div>
    )
}

export default RouteComponent;
