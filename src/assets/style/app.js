import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

// Header
export const HeaderContainer = styled.nav `
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

export const HeaderLeft = styled.div `
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;

    }
`;
export const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    transition: .3s;
    :hover {
        opacity: 0.8;
    }
`;
export const HeaderSearch = styled.div `
    flex: 0.4;
    opacity: 1;
    border-radius: 5px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 3px 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
    > ::placeholder {
        font-family: "Poppins", sans-serif;
    }
`;
export const HeaderRight = styled.div `
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;
// AppBody
export const AppBody = styled.main`
    display: flex;
    height: 100vh;
`
// Sidebar
export const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin: 8px 0;
        border: 1px solid #49274b;
    }
`;
export const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        margin: 7px 0;
        background-color: white;
        border-radius: 999px;
    }
`
export const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: #4cd137;
    }
`

// SidebarOptions
export const SidebarOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;
    transition: .3s;
    :hover {
        opacity: 0.8;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 500;
    }
    > h3 > span {
        padding: 15px;  
    }
`

export const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`
