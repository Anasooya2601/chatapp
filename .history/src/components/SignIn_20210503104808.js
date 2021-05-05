import React from 'react'

function SignIn  () {
    const [user]=userAuthState(auth);
    const provider=new firebase.auth.GoogleAuthProvider
    return (
       
       <button onClick={signInWithGoogle} >Sign in with Google</button>
      
    )
}

export default SignIn

