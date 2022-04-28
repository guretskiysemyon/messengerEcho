import React, {useContext, useState} from 'react';
import MyInput from "./Components/MyInput";
import MyButton from "./Components/MyButton";
import {userContext} from "./Contex";
import MyModal from "../MyModal";



const AddContactForm = ({addContact,setVisible}) => {
    
    const [name,setName] = useState('')
    
    const {userData,contacts,username} = useContext(userContext)
    
    const [msgBox,setMsgBox] = useState('');
    const [err,setErr] = useState(false)
    
    function Err(msg) {
        setMsgBox(msg)
        setErr(true)
    }
    
    function isAlreadyHas(arr, string){
        var x = false;
        arr.forEach(element => {
            if (element.username === string)
                x = true
        })
        return x
    }
    
    const addNewContact = (e) => {
        e.preventDefault()
        if (!userData.has(name)){
            Err('There is no person with this username')
        } else if(isAlreadyHas(contacts, name)) {
            Err('You already have friend with this username')
        } else if (name === username) {
            Err('You cannot add yourself')
        } else {
            addContact(name)
            setName('')
            setVisible(false)
        }
        setName('')
    }
    
    function closeMsgBox(e){
        e.preventDefault()
        setMsgBox('');
        setErr(false);
    }
    return (
        <div>
            <form>
                <MyInput value={name} onChange={e=> setName(e.target.value)} style={ {background :'white', color: 'black'}} type="text"/>
                <MyButton onClick={addNewContact}>Add new Contact</MyButton>
                <MyModal id='msgBox' visible={err} setVisible={setErr}>
                    <div  className="container-fluid align-text-center">{msgBox}</div>
                    <MyButton id='ok-but' className='btn-start' onClick={e=>closeMsgBox(e)}>Ok</MyButton>
                </MyModal>
            </form>
        </div>
    );
};

export default AddContactForm;