import { Navigate, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types'
import Home from "../page/Home";
import SobreNosotros from "../page/SobreNosotros";
import Habitos from "../page/Habitos";
import Header from "../../components/Header";
export default function RutasPrivadas({logaut}) {


  return (

    <>
        <Header></Header>
        {
        logaut ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
          <Route path="/habitos" element={<Habitos/>} />
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