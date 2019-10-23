import React from 'react';
import Contact from './Contact.js';

const tableuser = ["Yolanda Caldwell","Ana Mendoza", "Maurice Perez", "Ellen Garcia", "Stephanie Reed"];

const listeuser = tableuser.map(name => {
    return name;
});

const ContactList = props => (
    <p> {tableuser.map(name => { return <Contact name = {name} jghjj = 'test' />;})} </p>
)


export default ContactList;