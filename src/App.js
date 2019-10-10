import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact Avatar="https://randomuser.me/api/portraits/women/63.jpg" name = "Yolanda Caldwell" online/>
      <Contact Avatar="" name = "Mae Mckinney" online/>
      <Contact Avatar="https://randomuser.me/api/portraits/women/63.jpg" name = "Yolanda Caldwell" online/>
    </div>
  );
}

export default App;
