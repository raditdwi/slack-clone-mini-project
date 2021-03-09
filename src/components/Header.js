import React from 'react'
import { 
    HeaderContainer,
    HeaderAvatar,
    HeaderLeft,
    HeaderRight,
    HeaderSearch 
} from 'assets/style/app';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase'

export default function Header() {
    const [user] = useAuthState(auth)
    return (
        <header className="header__elements">
            <HeaderContainer>
                {/* Header Left */}
                <HeaderLeft>
                    <HeaderAvatar
                        onClick={() => auth.signOut()}
                        src={user?.photoURL}
                        alt={user?.displayName}
                    />
                    <AccessTimeIcon />
                </HeaderLeft>

                {/* Header Search */}
                <HeaderSearch>
                    <SearchIcon />
                    <input placeholder="Search Rades / Devlits"/>
                </HeaderSearch>

                {/* Header Right */}
                <HeaderRight>
                    <HelpOutlineIcon/>
                </HeaderRight>
            </HeaderContainer>
        </header>
    )
}