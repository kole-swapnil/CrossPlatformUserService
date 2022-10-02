import Signup from "./components/signup/signup.jsx";
import Login from "./components/login/login.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
 return (
   <div className="App">
     <Routes>
       <Route exact path="/" element={<Signup />} />
       <Route exact path="/login" element={<Login />} />
     </Routes>
   </div>
 );
}

export default App;
