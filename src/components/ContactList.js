import React from 'react';
import Contact from './Contact.js';

const list = [

{
name : "Yolanda Caldwell",
avatar:"https://randomuser.me/api/portraits/women/63.jpg",
online : true

},
{
name : "Ana Mendoza",
avatar:"https://randomuser.me/api/portraits/women/84.jpg",
online : false
},
{
    name : "Maurice Perez", 
    avatar:"https://randomuser.me/api/portraits/men/23.jpg",
    online : true
},
{
   name :"Ellen Garcia",
   avatar:"https://randomuser.me/api/portraits/women/4.jpg",
   online : true 
}
]

const ContactList = () => (
    <div>
        {list.map(item => (
            <Contact name={item.name} avatar={item.avatar} online={item.online}/>
        ))}
        </div>
        )

export default ContactList;