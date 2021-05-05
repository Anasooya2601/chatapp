import React from 'react'

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
