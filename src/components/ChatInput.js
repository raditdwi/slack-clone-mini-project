import React, { useState } from 'react'
import firebase from 'firebase'

import { useAuthState } from 'react-firebase-hooks/auth';
import { ChatInputContainer } from 'assets/style/app';
import { Button } from '@material-ui/core';
import { db, auth } from '../firebase'

export default function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState("")
    const [user] = useAuthState(auth)

    function sendMessage(e){
        e.preventDefault() // Prevent Refresh

        if(!channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL
        })

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setInput("")
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}
