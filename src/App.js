import React from 'react';
import Contact from './components/Contact.js';
import ContactList from './components/ContactList';


function App() {
  return (
    <div className="App">
      <Contact Avatar="https://randomuser.me/api/portraits/women/63.jpg" name = "Yolanda Caldwell" online/>
      <Contact Avatar="https://randomuser.me/api/portraits/women/84.jpg" name = "Ana Mendoza" online/>
      <Contact Avatar="https://randomuser.me/api/portraits/men/23.jpg" name = "Maurice Perez" online/>
      <Contact Avatar="https://randomuser.me/api/portraits/women/4.jpg" name = "Ellen Garcia" online/>
      <Contact Avatar="https://randomuser.me/api/portraits/women/8.jpg" name = "Stephanie Reed" online/>
      <div>
        <ContactList/>
      </div>
    </div>  
  );
}

export default App;
