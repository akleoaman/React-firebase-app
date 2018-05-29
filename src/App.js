import React, { Component } from 'react';
import MessageList from './components/MessageList'
import Header from './components/Header'
import firebase from 'firebase'
import MessageBox from './components/MessageBox'

class App extends Component {
    constructor(props){
      super(props);
      firebase.initializeApp( {
        apiKey: "AIzaSyCS_qqTSPXPDIGNtubAXGNBiHEg4Ah-Xrc",
        authDomain: "react-firebase-399b0.firebaseapp.com",
        databaseURL: "https://react-firebase-399b0.firebaseio.com",
        projectId: "react-firebase-399b0",
        storageBucket: "react-firebase-399b0.appspot.com",
        messagingSenderId: "957548672891"
      });
      //firebase.initializeApp(config);
    }
  render() {
    return (
      <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
  </div>
     
    );
  }
}

export default App;
