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

export default function Header() {
    return (
        <header className="header__elements">
            <HeaderContainer>
                {/* Header Left */}
                <HeaderLeft>
                    <HeaderAvatar />
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