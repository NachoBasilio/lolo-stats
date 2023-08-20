import { Navigate, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types'
import Home from "../page/Home";

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