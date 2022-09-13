import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from "./Register"
import Home from './Home';

const Base = () => {
  return (
    <div>

<Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/home"
              element={<Home />}
            />
             
             
          </Routes>
    </div>
  )
}

export default Base