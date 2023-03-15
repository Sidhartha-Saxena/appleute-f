import "./App.css";
import Header from "./components/Header";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
