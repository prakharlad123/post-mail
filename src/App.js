import React, { useEffect } from 'react';
import { login } from './features/userSlice';
import './App.css';
import Header from "./Header";
import Mail from './Mail';
import EmailList from './EmailList';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useScrollTrigger } from '@material-ui/core';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
    if(user){
      dispatch(login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }  
      ))
      console.log(user)
    } else {
      dispatch(logout())
    }
  })
  }, [dispatch])

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       // the user is logged in
  //       dispatch(login({
  //         uid: user.uid,
  //         displayName: user.displayName,  
  //         email: user.email,
  //         photoURL: user.photoURL,
  //         emailVerified: user.emailVerified
  //       }))
  //     }
  //   })
  // }, [dispatch])

  return (
    <Router>
      {!user? (
        <Login />
      ) : (
        <div className="app">
        <Header />

        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
