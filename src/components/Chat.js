import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectRoomId } from 'features/appSlice';

import { ChatContainer, ChatHeader, HeaderChatLeft, HeaderChatRight, ChatMessages, ChatBottom } from 'assets/style/app';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LockIcon from '@material-ui/icons/Lock';

import ChatInput from 'components/ChatInput'
import Message from 'components/Message';

import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

export default function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessage, loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
    }, [roomId, loading])
    return (
        <ChatContainer>
            {roomDetails && roomMessage && (
            <>
                <ChatHeader>
                    <HeaderChatLeft>
                        <LockIcon />{" "}
                        <h4>
                        <strong> {roomDetails?.data().name ?? 'Channel-Name'}</strong>
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
                    <ChatBottom ref={chatRef} />
                </ChatMessages>
                <ChatInput
                    chatRef={chatRef}
                    channelName={roomDetails?.data().name ?? 'Channel-Name'}
                    channelId={roomId}
                />
            </>
            )}
        </ChatContainer>
    )
}
