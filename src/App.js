 import Home from "./pages/Home"
 import Cart from "./pages/Cart"
 import Login from "./pages/Login"
 import Register from "./pages/Register"
 import Product from "./pages/Product"
 import NotFound from "./pages/NotFound"
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/product/:productId" element={<Product/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;


export const ProtectedRoute = ({children})=>{
  if(localStorage.getItem('currentUser')){
    return children
  }
 return <Navigate to = "/login" />
}
