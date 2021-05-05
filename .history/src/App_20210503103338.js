import React from 'react';
import './App.css';
import firebase from 'firebase/app'
function App() {
  return (
    <div className="App">
     <header className="App-header">
<section>
  {
    user ? <chatroom/>:<SignIn/>
  }
</section>
     </header>
       
    </div>
  );
}

export default App;
