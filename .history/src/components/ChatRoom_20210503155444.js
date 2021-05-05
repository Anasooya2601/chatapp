import React from 'react'
import firebase from 'firebase/config'
import "firebase/firestore";
import "firebase/auth";
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
function ChatRoom (){
    const [user]=useAuthState(auth)
    const messageRef=firestore.collection('message');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages]=useCollectionData(query,{idField:'id'})
    const [formValue,setFormValue]=useState("")
    const sendMessage=async (e) =>{
        e.preventDefault();
        const {uid,photoURL}=auth.currentUser;
        await messageRef.add({
            text:formValue,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid,photoURL
        })
        setFormValue('')
    }
    return (
    <div>
        <div>
        {message && messages.map(msg=><ChatRoom key={msg.id}></ChatRoom>)}    
        </div>
     <form onSubmit={sendMessage}>
         <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
       <button type="submit">👍</button>

        </form>
        </div>
    )
}

export default ChatRoom
