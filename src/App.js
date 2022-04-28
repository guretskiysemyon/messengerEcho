import React from "react";
import "./bootstrap.min.css"
import "./App.css"
import Audio from './project/bensound-cute.mp3'
import Image from './project/ceH-HBO6KwI.jpg'
import Video from './project/Every programming tutorial.mp4'
import {BrowserRouter} from "react-router-dom";
import Echo from "./project/Echo";




function App() {
    
    var userData = new Map();

    userData.set('Bodek',{nickname:"Bodek AP",
        password:'ww2',
        photo:{url:''},
        contacts:[ {username:"semyon",nickname:"Semyon Guretskiy", chat:[], photo:{url:''}},
            {username:"Borys",nickname:"Borys T", chat:[
                    {
                        id: Date.now(),
                        body: 'Hello,Bodek. Welcome to our messenger.',
                        date: '28/04/2022',
                        time: '15:00',
                        to:'Borys',
                        from:'Bodek',
                        type:'text'
                    }
                ], photo:{url:''}},
            {username:"Alon88",nickname:"Alon1997", chat:[
                    {
                        id: Date.now(),
                        body: Video,
                        date: '28/04/2022',
                        time: '15:00',
                        to:'Alon88',
                        from:'Bodek',
                        type:'video'
                    }
                ], photo:{url:''}},
            {username:"Sagi",nickname:"Sagi Raam", chat:[
                    {
                        id: Date.now(),
                        body: Audio,
                        date: '28/04/2022',
                        time: '15:00',
                        to:'Bodek',
                        from:'Sagi',
                        type:'audio'
                    }
                ], photo:{url:''}},
            {username:"HarryPotter",nickname:"Harry Potter", chat:[
                    {
                        id: Date.now(),
                        body: Image,
                        date: '28/04/2022',
                        time: '15:00',
                        to:'Bodek',
                        from:'HarryPotter',
                        type:'img'
                    }
                ], photo:{url:''}}]
        
    })

    userData.set('semyon',{nickname:"Semyon Guretskiy",
        password:'q1',
        photo:{url:''},
        contacts:[{username:"Bodek",nickname:"Bodek AP", chat:[], photo:{url:''}}]
    })

    userData.set('Borys',{nickname:"Borys T",
        password:'helloWorld2',
        photo:{url:''},
        contacts:[{username:"Bodek",nickname:"Bodek AP", chat:[
                {
                    id: Date.now(),
                    body: 'Hello Bodek. Welcom to our messenger.',
                    date: '28/04/2022',
                    time: '15:00',
                    to:'Bodek',
                    from:'Borys',
                    type:'text'
                }
            ], photo:{url:''}}]
    })

    userData.set('Alon',{nickname:"Alon1997",
        password:'q1',
        photo:{url:''},
        contacts:[{username:"Bodek",nickname:"Bodek AP", chat:[
                {
                    id: Date.now(),
                    body: 'src/project/Every programming tutorial.mp4',
                    date: '28/04/2022',
                    time: '15:00',
                    to:'Alon88',
                    from:'Bodek',
                    type:'video'
                }
            ], pphoto:{url:''}}]
    })

    userData.set('Sagi',{nickname:"Sagi Raam",
        password:'bornToPeace2',
        photo:{url:''},
        contacts:[{username:"Bodek",nickname:"Bodek AP", chat:[
                {
                    id: Date.now(),
                    body: './bensound-cute.mp3',
                    date: '28/04/2022',
                    time: '15:00',
                    to:'Bodek',
                    from:'Sagi',
                    type:'audio'
                }
            ], photo:{url:''}}]
    })

    userData.set('HarryPotter',{nickname:"Harry Potter",
        password:'Nimbus2000',
        photo:{url:''},
        contacts:[{username:"Bodek",nickname:"Bodek AP", chat:[
                {
                    id: Date.now(),
                    body: {url:'src/project/ceH-HBO6KwI.jpg'},
                    date: '28/04/2022',
                    time: '15:00',
                    to:'Bodek',
                    from:'HarryPotter',
                    type:'image'
                }
            ], photo:{url:''}}]
    })

    userData.set('Sony',{nickname:"Sony.F",
        password:'hgrt2',
        photo:{url:''},
        contacts:[]
    })

    
   
    
    return (
        <BrowserRouter>
                <Echo userData={userData}/>
        </BrowserRouter>
      
    );
    
    
}

export default App;

