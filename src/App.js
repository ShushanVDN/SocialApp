import React from 'react';
import './App.css';
//import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
//import Profile from './components/Profile/Profile'
import {Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>
                {/* <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={AboutUs} /> 
          <Route path='/music' component={Music} /> 
          <Route path='/settings' component={Settings} />  */}
                {/* <Route path='/dialogs' render={ () => <Dialogs ialogsData={props.state.dialgPage.dialogsData}
                     messages={props.state.dialogPage.messages} />} />  */}
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                {/*<Route path='/profile'*/}
                {/*       render={() => <Profile/>}/>*/}
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                {/* <Route path='/profile' render={SomeComponent} />
          <Route path='/profile' component={SomeComponent} /> */}

                <Route path='/about' render={() => <AboutUs/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
