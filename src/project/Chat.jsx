import React, {useContext} from 'react';
import FriendInfo from "./FriendInfo";
import MessageList from "./Components/MessageList";
import SendMessageFrom from "./SendMessageForm";
import {useState} from "react";
import {userContext} from "./Contex";


const Chat = ({person,username}) => {

    const {contacts,setContacts,userData} = useContext(userContext)
    
    const[event,setEvent] = useState(false)
    const {newMes,setNewMes} = useContext(userContext)
    
    const addNewMessage = (message) => {
        message.to=person.username;
        message.from= username
        person.chat.push(message)
        const secondSide = userData.get(person.username).contacts.find(element=> element.username === username).chat
        secondSide.push(message)
        setEvent(!event)
        setNewMes(!newMes)
    }
    
    
    
    return (
        <div className="col-md-8">
            <FriendInfo name={person.nickname} photo={person.photo} />
            <div className="row-10  chat-window">
                <div className="message-window" >
                    <MessageList username={username} messages={person.chat}/>
                </div>
                <div className="bottom-row">
                    <SendMessageFrom addMessage={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Chat;