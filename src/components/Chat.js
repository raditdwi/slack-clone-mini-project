import React from 'react'
import { useSelector } from 'react-redux'
import { selectRoomId } from 'features/appSlice';

import { ChatContainer, ChatHeader, HeaderChatLeft, HeaderChatRight, ChatMessages } from 'assets/style/app';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import ChatInput from 'components/ChatInput'
import Message from 'components/Message';

import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

export default function Chat() {
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessage] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    )
    return (
        <ChatContainer>
            <>
                <ChatHeader>
                    <HeaderChatLeft>
                        <h4>
                        <strong># {roomDetails?.data().name ?? 'Channel-Name'}</strong>
                        </h4>
                        <StarBorderOutlinedIcon/>
                    </HeaderChatLeft>
                    <HeaderChatRight>
                        <p>
                            <InfoOutlinedIcon/> Details
                        </p>
                    </HeaderChatRight>
                </ChatHeader>
                
                <ChatMessages>
                    {roomMessage?.docs.map(doc => {
                        const { message, timestamp, user, userImage } = doc.data();

                        return (
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        )
                    })}
                </ChatMessages>
                <ChatInput 
                    channelName={roomDetails?.data().name ?? 'Channel-Name'}
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}
