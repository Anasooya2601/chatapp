import React from 'react'
import firebase from 'firebase/app'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';

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

