import {Routes , Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import AppNavbar from "./components/Navbar/AppNavbar";
import AddPage from "./Pages/AddPage";

function App() {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<AddPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
