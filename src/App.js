import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = (props)  => {

  return (
       <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} /> 
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={AboutUs} /> 
          <Route path='/music' component={Music} /> 
          <Route path='/settings' component={Settings} />  */}
          {/* <Route path='/dialogs' render={ () => <Dialogs ialogsData={props.state.dialgPage.dialogsData}
                     messages={props.state.dialogPage.messages} />} />  */}
          <Route path='/dialogs' 
                render={ () => <Dialogs state={props.state.disalogsPage} />} />
          <Route path='/profile' 
                render={ () => <Profile profilePage= {props.state.profilePage}
                                        dispatch = {props.dispatch} /> } />

          {/* <Route path='/profile' render={SomeComponent} />
          <Route path='/profile' component={SomeComponent} /> */}

          <Route path='/about' render={ () => <AboutUs />} /> 
          <Route path='/music' render={ () => <Music /> } /> 
          <Route path='/settings' render={ () => <Settings />} /> 
        </div>
      </div>
  );
}

export default App;
