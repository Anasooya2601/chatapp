import React from 'react'
const [user]=userAuthState(auth);
function SignIn  () {
    const [user]=userAuthState(auth);
    const provider=new firebase.auth.GoogleAuthProvider
    return (
       
       <button onClick={signInWithGoogle} >Sign in with Google</button>
      
    )
}

function SignOut(){
<button onClick={()=>auth.signOut()}>Sign Out</button>
}

export default (SignIn,SignOut)

