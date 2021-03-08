import React from 'react'
import { db } from '../firebase';
import { SidebarOptionsContainer, SidebarOptionChannel } from 'assets/style/app'

export default function SidebarOptions({ Icon, title, addChannelOption, id }) {
    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }   

    const selectChannel = () => {
        
    }

    return (
        <SidebarOptionsContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {/* Render Component Icon */}
            { Icon && <Icon fontSize="small" style={{ padding: 10 }} /> }

            {/* Render Component Title */}
            { Icon ? (
                <h3>{title}</h3>
            ) : ( 
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
            )}
        </SidebarOptionsContainer>
    )
}
