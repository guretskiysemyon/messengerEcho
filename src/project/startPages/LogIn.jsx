import React, {useContext} from 'react';
import logo from './logo.png'
import MyInput from "../Components/MyInput";
import {Link} from "react-router-dom";
import MyButton from "../Components/MyButton";
import {useState} from "react";
import MyModal from "../../MyModal";
import {useNavigate} from "react-router";
import {AuthContext} from "../Contex";
import './LogIn.css'





const LogIn = ({userData,setUser}) => {

    const {isAuth,setIsAuth} = useContext(AuthContext)

    const[userName,setUserName] = useState('')

    const[password,setPassword] = useState('')

    const[msgBox,setMsgBox] = useState('');

    const [visible,setVisible] = useState(false)
    
    const navigate=useNavigate();

    function Err(msg) {
        setMsgBox(msg)
        setVisible(true)
    }

    function logIn() {
        
        //collect form data in JavaScript variables

        //check empty nickname field  
        if (userName === "") {
            Err("Fill the first name");
            return;
        }

        //check empty password field  
        if (password === "") {
            Err("Fill the password please!");
            return;
        }

        const person = userData.get(userName);
        
        if (person === undefined){
            Err("Wrong Nickname.")
            return;
        }
        const realPsw = person.password;
        if (realPsw !== password){
            Err("Passwords don't match")
            return;

        }
        setIsAuth(true)
        setUser(userName)
        navigate('/echo/chats')

    }
    function closeMsgBox(){
        setMsgBox('');
        setVisible(false);
    }
    
    return (
        <div className="body">
            
            <div className="row">
                <div className="bar">
                    <img className="logo" src={logo} alt='logo'/>
                </div>
            </div>
            <div className="row form justify-content-center">
                <div className="form-content-log  col-md-4 border border-dark">
                    <div className="mb-3">
                        <MyInput  value={userName} onChange={e=> setUserName(e.target.value)}
                            type="text" className="form-control" id="inputUser" placeholder="username@"/>
                    </div>
                    <div className="mb-3">
                        <MyInput value={password} onChange={e=> setPassword(e.target.value)}
                            type="password" className="form-control" id="inputPassword" placeholder="password"/>
                    </div>
                    <div className=" text-center">
                        <MyButton  onClick={logIn}
                            type="button"  className="btn-log">Log In</MyButton>
                    </div>
                </div>
                <div className="another-options text-center text-decoration-underline">
                    <p>
                        <Link to="/echo/sign-up">Doesn't have accaunt?</Link>
                    </p>
                </div>
            </div>

            <MyModal id='msgBox' visible={visible} setVisible={setVisible}>
                <div  className="container-fluid align-text-center">{msgBox}</div>
                <MyButton id='ok-but' className='btn-start' onClick={e=>closeMsgBox()}>Ok</MyButton>
            </MyModal>
        </div>
    );
};
        
export default LogIn;