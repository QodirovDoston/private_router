import React from "react";
import Elemnt from "./companets/Elemnt";
import Home from "./companets/Home";
// import PrivateRoute from './ProctedProject';
import { Routes, Route, Navigate} from 'react-router-dom';
import BasicExample from "./companets/Navbar";
// import { history } from '_helpers';

// history.navigate = useNavigate();
// history.location = useLocation();

function App() {
  return (
    <>
    <BasicExample/>
      <Routes>
        <Route exact path="/protected" element={
            // <PrivateRoute>
              <Home />
            /* </PrivateRoute> */
          }
          />
        <Route index path="/ler" element={<Elemnt />} ></Route>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
export default App;
