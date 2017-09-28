import React from 'react';
import { Route } from 'react-router-dom';
import MedalsTableContainer from './MedalsTableContainer';
import SportContainer from './SportContainer';


// Trying out new React Fiber stuff :)
// We can render an array of elements! Woohoo!
export default () => [
  <Route key={0} exact path="/" component={ MedalsTableContainer }/>,
  <Route key={1} path="/sport/:sportId/:color" component={ SportContainer }/>,
];
