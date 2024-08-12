import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AddNewItem from "./Components/AddNewItem";
import UpdateItem from "./Components/UpdateItem";
// import DisplayAllItems from "./Components/DisplayAllItems";
import { Route,Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import UpdateShow from "./Components/UpdateShow";
import DeleteItem from "./Components/DeleteItem";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css'

function App(){
  return(
    <>
    <Menu/>
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/updateshow" element={<UpdateShow/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/delete" element={<DeleteItem/>} />
      <Route path="/add" element={<AddNewItem/>} />
      <Route path="/update/:id" element={<UpdateItem/>} />
      {/* <Route path="/display" element={<DisplayAllItems/>} /> */}
      </Routes>
    <Footer/>
    </>

  )

}
export default App;