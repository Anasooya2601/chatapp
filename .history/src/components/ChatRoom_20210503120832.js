import React from 'react'
import firebase from './fire'
function ChatRoom (){
    const messageRef=firestore.collection('message');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages]=useCollectionData(query,{idField:'id'})
    const [formValue,setFormValue]=useState("")
    return (
    <div></div>
        <div>
        {message && messages.map(msg=><ChatRoom key={msg.id}></ChatRoom>)}    
        </div>
     <form>
         <input value={formValue} onChange={}/>
       <button type="submit">👍</button>

        </form>
     
    )
}

export default ChatRoom
