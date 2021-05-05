// import React from 'react'
// import firebase from 'firebase/app'
// import "firebase/firestore";
// import "firebase/auth";
// import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollectionData} from 'react-firebase-hooks/firestore'
// function ChatMessage(props) {
//     const [user]=useAuthState(auth)
//     const [messages]=useCollectionData(query,{idField:'id'})
//     const messageRef=firestore.collection('messages');
//     const query = messagesRef.orderBy('createdAt').limit(25);
//     const{text,uid,photoUrl}=props.message;
//     const messageClass=uid===auth.currentUser.uid ? 'sent':'received'
//     return (
//         <div className={`message ${messageClass}`}>
// <img src="photoUrl"></img>
// <p>{text}</p>
//         </div>
//     )
// }

// export default ChatMessage
