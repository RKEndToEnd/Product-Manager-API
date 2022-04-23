import './App.css';
import Header from "./Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/*<Header/>*/}
                {/*<h4 className="card-header">Product Manager</h4>*/}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Protected Cmp={CreateProduct} />} />
                    <Route path="/update" element={<Protected Cmp={UpdateProduct}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
