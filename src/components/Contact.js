import React from 'react';
import './Contact.css';

const Contact = props => (
    <div className="Contact"> 
       <img className="avatar" src={props.Avatar}/> 
        <div>
            <p className="name"> {props.name}</p>
            <div className="status">
                <div className= {props.online ? "status-online" : "status-offline"} ></div>
                    <p className= 'status-text'>{props.online ? "online" : "offline"} </p>
            </div>
        </div>        
    </div>
    
)

export default Contact;