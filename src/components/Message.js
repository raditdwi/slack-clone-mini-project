import React from 'react'
import { MessageContainer, MessageInfo } from 'assets/style/app';
export default function Message({ message, timestamp, user, userImage }) {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return (
        <MessageContainer>
            <img src={userImage} alt={`user-${user}`}/>
            <MessageInfo>
                <h4>
                    {user ?? 'Name User'}{" "}
                    <span> {new Date(timestamp?.toDate()).toLocaleString('en-US', options) ?? '07:06:30'} </span>
                </h4>
                <p>{message ?? 'Message User'}</p>
            </MessageInfo>
        </MessageContainer>
    )
}
