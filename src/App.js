import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ConsentList from "./Pages/ConsentList.jsx";
import Login from "./Pages/Login.jsx";
import Protectedroutes from "./Components/auth/Protectedroutes.jsx";
import Publicroutes from "./Components/auth/Publicroutes.jsx";

function App() {
  return (
    <div className="App">
       <Router>
        
        <Routes>
          
          <Route element={<Protectedroutes />}>
            <Route path="/" element={<ConsentList />} />
          </Route>

          <Route element={<Publicroutes />}>
          <Route path="/login" element={<Login />} />
          </Route> 

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

