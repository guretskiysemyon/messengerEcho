import React, {useState} from 'react';
import {Routes,Navigate, useNavigate} from "react-router";
import { Route} from "react-router-dom";
import StartPage from "./startPages/StartPage";
import LogIn from "./startPages/LogIn";
import SignUp from "./startPages/SignUp";
import Messenger from "./Messenger";
import {AuthContext} from "./Contex";




const Echo = ({userData}) => {
    
    

    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState('');
    const navigate = useNavigate();
    
    let logOut = (e) => {
        e.preventDefault()
        setIsAuth(false)
        setUser('')
        navigate('/')
    }
    return (
        <AuthContext.Provider 
                    value={{
                        isAuth: isAuth,
                        setIsAuth: setIsAuth,
                        logOut: logOut
                    }}>
            {
            isAuth ?
                
                    <Routes>
                    <Route exact path='/echo/chats' element={<Messenger userData={userData} username={user}/>}/>
                    </Routes>
                
            :
            <Routes>
                <Route path='/' element={<StartPage/>}/>
                <Route path='/echo/log-in' element={<LogIn setUser={setUser} userData={userData}/>}/>
                <Route path='/echo/sign-up' element={<SignUp userData={userData}/>}/>
                <Route path='/*' element={<Navigate to="/" replace />}/>
            </Routes>}
            
        </AuthContext.Provider>
           
            
            
        
    );
};

export default Echo;