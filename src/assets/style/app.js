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
        font-family: var(--slack-font);
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

// Chat Section
export const ChatContainer = styled.section`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`
export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid lightgray;
`
export const HeaderChatLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-left: 3px;
    }
    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 20px;
    }
`
export const HeaderChatRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root {
        margin-right: 3px;
        font-size: 18px;
    }
`
export const ChatMessages = styled.div`

`
export const ChatInputContainer = styled.div `
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid lightgray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > input::placeholder {
        font-family: var(--slack-font);
    }
    > form > button {
        display: none;
    }
`
export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
    }
`
export const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`
export const ChatBottom = styled.div `
    padding-bottom: 200px;
`

// Login Page
export const LoginContainer = styled.section`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`
export const LoginInnerContainer = styled.div`
    padding: 100px 50px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0, .12), 0 1px 2px rgba(0,0,0, .12);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button {
        font-family: var(--slack-font);
        margin-top: 50px;
        text-transform: inherit;
        background-color: #0a8d48;
        color: white;
        transition: .5s;
    }
    > button:hover {
        color: var(--slack-color);
    }
`
// Loading Screen
export const AppLoading = styled.div `
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
`
export const AppLoadingContents = styled.div `
    text-align: center;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
        height: 100px;
        padding: 20px;
        margin-bottom: 20px;
    }
`