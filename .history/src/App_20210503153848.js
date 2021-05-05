import React from 'react';
import './App.css';
import firebase from 'firebase/app'
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

function App() {
 
  return (
    <div className="App">
     <header>
<section>
  {
    user ? <ChatRoom/>:<SignIn/>
  }
</section>
     </header>
       
    </div>
  );
}


export default App;
