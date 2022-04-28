import React, {useMemo} from 'react';
import UpLeftRow from "./Up-left-row";
import ContactList from "./ContactList";
import Chat from "./Chat";
import {useState} from "react";
import {userContext} from "./Contex";
import logo from './startPages/logo.png'



const Messenger = ({userData,username}) => {
    
    const user = userData.get(username)
   
    const [contacts, setContacts] = useState(user.contacts)
   
    
    const [chatId,setChatId] = useState(0)
    
    
    const changeChat = (find) => {
        const index = contacts.map(object => object.username).indexOf(find);
        setChatId(index)
    }
    
    const addContact  = (name) => {
        var me = {username:username, nickname:user.nickname, chat:[], photo: user.photo}
        var another = {username:name, nickname:userData.get(name).nickname, chat:[], photo: userData.get(name).photo}
        userData.get(name).contacts.push(me)
        setContacts([...contacts,another])
        user.contacts.push(another)
    }
    
    
    const[newMes,setNewMes]=useState(false)

    const [search,setSearch]=useState('')
    
    
    const searchedContacts = useMemo(()=>{
        return contacts.filter(contact => contact.nickname.toLowerCase().includes(search))
    },[search,contacts])
    
    return (
        
        <userContext.Provider value={
            {contacts:contacts, setContacts:setContacts,newMes:newMes,setNewMes:setNewMes, userData:userData, username:username}
        }>
            <div className="row">
                <div className="col-md-4 d-none d-md-block">
                    <UpLeftRow addContact={addContact} setSearch={setSearch}/>
                    <div className="contacts-list"  style={{marginTop:'40px'}}>
                        <ContactList  changeChat={changeChat} contacts={searchedContacts}/>
                    </div>
                </div>
                {
                    contacts.length ?
                    < Chat user={user} username={username} person={contacts[chatId]}/>
                    :
                        <div className="col-md-8">
                            <div className="container  text-center text-white" >
                                <img src={logo}  className="logo" alt='logo' style={{width:'125px'}}/>
                                <h1>You don't have chat yet</h1>
                            </div>
                        </div>
                    
                }
            </div>
        </userContext.Provider>
        
    );
};

export default Messenger;

    