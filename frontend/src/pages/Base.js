import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from "./Register"
import Home from './Home';
import Landing from './Landing';
import Profile from "../components/Profile";
import SuccessStoriesForm from '../components/SuccessStoriesForm';

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

            <Route
              path="/landing"
              element={<Landing />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/addsuccessstories"
              element={<SuccessStoriesForm />}
            />
             
             
          </Routes>
    </div>
  )
}

export default Base
