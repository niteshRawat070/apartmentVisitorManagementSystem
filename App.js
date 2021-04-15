import React from 'react'
import './App.css'
import { Route, Router, Switch, useLocation } from "react-router-dom";
import Welcome from './Welcome';
import FirstScreen from './Screens/FirstScreen';
import GuardHomePage from './Screens/GuardHomePage';
import ResidentHomePage from './Screens/ResidentHomePage';
import HowItWorks from './Screens/HowItWorks';



function App() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/guard'>
        <GuardHomePage />
      </Route>
      <Route path='/resident'>
        <ResidentHomePage />
      </Route>
      <Route path='/about'>
        <HowItWorks />
      </Route>
      <Route path='/'>
        <FirstScreen />
      </Route>
    </Switch>
  )
}

export default App
