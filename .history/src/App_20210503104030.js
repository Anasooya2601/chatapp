import React from 'react';
import './App.css';
import firebase from 'firebase/app'
function App() {
  const [user]=userAuthState(auth);
  return (
    <div className="App">
     <header>
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
