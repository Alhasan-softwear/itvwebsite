import React from "react";
import './App.css';
import Header from "./Header"
import Main from "./Main";
import Sidebar from "./Sidebar"
function App() {
  return (
    <div className="app">
     <Header/>
     <div className="app_body">
     <Sidebar/>
       <Main/>
   
      {/* widgets */}  
     </div>
      {/* App body */}
    </div>
  );
}

export default App;
