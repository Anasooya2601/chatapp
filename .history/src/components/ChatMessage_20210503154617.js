import React from 'react'
import firebase from 'firebase/app'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
function ChatMessage(props) {
    const{text,uid,photoUrl}=props.message;
    const messageClass=uid===auth.currentUser.uid ? 'sent':'received'
    return (
        <div className={`message ${messageClass}`}>
<img src="photoUrl"></img>
        </div>
    )
}

export default ChatMessage
