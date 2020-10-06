import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Accueil from './accueil';
import Contact from './contact';
import Projets from './projets';
import cv from './cv';



const Main = () =>(
<Switch>
    <Route exact path="/" component={Accueil}></Route>
    <Route exact path="/Projets" component={Projets}></Route>
    <Route exact path="/Contact" component={Contact}></Route>
    <Route exact path="/Cv" component={cv}></Route>
</Switch>
);
export default Main;    