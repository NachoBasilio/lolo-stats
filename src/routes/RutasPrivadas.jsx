import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropTypes from 'prop-types'

export default function RutasPrivadas({logaut}) {


  return (
    <>
        {
        logaut ?
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        :
        <Navigate to="/auth/" />
      }
    </>
  )
}


RutasPrivadas.prototype = {
  logaut: PropTypes.bool.isRequired
}