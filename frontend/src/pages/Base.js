import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from "./Register"
import Home from './Home';
import Landing from './Landing';
import Profile from "../components/Profile";
import SuccessStoriesForm from '../components/SuccessStoriesForm';
import JobOpportunities from '../components/JobOpportunities';
import QueriesForm from '../components/QueriesForm';
import Clubs from '../components/Clubs';
import Academictranscript from '../components/AcademicTranscriptForm';
import Mediumofinstructionform from '../components/MediumOfInstructionForm';
import Objectives from '../components/Objectives';
import MentorForm from '../components/MentorForm';
import GuestSpeakerForm from '../components/GuestSpeakerForm';
import Chats from '../components/Chats';

const Base = () => {
  return (
    <div>

<Routes>
            <Route
              path="/login"
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

          <Route
              path="/jobs"
              element={<JobOpportunities />}
            />

          <Route
              path="/queries"
              element={<QueriesForm />}
            />

          <Route
              path="/clubs"
              element={<Clubs />}
            />
             
          <Route
              path="/transcriptform"
              element={<Academictranscript />}
            />
            <Route
              path="/mediumofinstruction"
              element={<Mediumofinstructionform />}
            />

          <Route
              path="/"
              element={<Landing />}
            />

          <Route
              path="/objectives"
              element={<Objectives />}
            />

          <Route
              path="/mentorform"
              element={<MentorForm />}
            />

          <Route
              path="/guestspeaker"
              element={<GuestSpeakerForm />}
            />

          <Route
              path="/chats"
              element={<Chats />}
            />
             

          </Routes>
    </div>
  )
}

export default Base
