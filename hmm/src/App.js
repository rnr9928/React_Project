import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import {  userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children} ) => {
    return currentUser ? children : <Navigate to ="/login"/>
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">  
           <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
         
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
