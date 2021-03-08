import React from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../firebase';
import { SidebarOptionsContainer, SidebarOptionChannel } from 'assets/style/app'
import { enterRoom } from 'features/appSlice';

export default function SidebarOptions({ Icon, title, addChannelOption, id }) {
    const dispatch = useDispatch()
    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }   

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
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
