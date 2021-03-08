import React from 'react'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import SidebarOption from 'components/SidebarOptions';
import { SidebarContainer, SidebarHeader, SidebarInfo } from 'assets/style/app';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
export default function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection('rooms'))
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Rades Pratama</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Hmm, not bad
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />

            {channels?.docs.map(doc => (       
                <SidebarOption title={doc.data().name} key={doc.id} id={doc.id} />
            ))}
        </SidebarContainer>
    )
}