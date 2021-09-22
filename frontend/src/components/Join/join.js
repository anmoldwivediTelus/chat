import React, {useState} from "react"
import {Link} from "react-router-dom"
import './join.css'
const Join = ( ) =>{
    const [name,setName] = useState("")
    const [room,setRoom] = useState("")
    
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">
                    Join
                </div>
                <div className="joinInputBox">
                    <input name="name" placeholder="name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="joinInputBox">
                    <input name="room" placeholder="room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={ event => (!name || !room) ? event.preventDefault(): null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="text" type="submit" >Join</button>
                </Link>
            </div>
        </div>
    )
 }
export default Join