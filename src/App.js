import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import state from './redux/state'
import {addPost} from './redux/state'

// let SomeComponent = () => <Profile />;

function App(props) {
//   const posts = [
//     {id: 1, message: 'How are you', likesCount: 12},
//     {id: 2, message: 'What is your name', likesCount: 17},
//     {id: 3, message: 'This is my first post', likesCount: 20},  
//     {id: 4, message: 'I receive some projecs', likesCount: 7},
//     {id: 5, message: 'I like coding', likesCount: 65},
//     {id: 6, message: 'yeaaahh', likesCount: 14},  
// ]
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} /> 
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={AboutUs} /> 
          <Route path='/music' component={Music} /> 
          <Route path='/settings' component={Settings} />  */}

          {/* <Route path='/dialogs' 
                  render={ () => <Dialogs ialogsData={props.state.dialgPage.dialogsData} 
                                          messages={props.state.dialogPage.messages} />} />  */}
          <Route path='/dialogs' 
                render={ () => <Dialogs   state={props.state.disalogsPage} />} /> 
          <Route path='/profile' 
                render={ () => <Profile state= {props.state.profilePage} addPost = {props.addPost} />} />


          {/* <Route path='/profile' render={SomeComponent} />
          <Route path='/profile' component={SomeComponent} /> */}

          <Route path='/about' render={ () => <AboutUs />} /> 
          <Route path='/music' render={ () => <Music /> } /> 
          <Route path='/settings' render={ () => <Settings />} /> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
