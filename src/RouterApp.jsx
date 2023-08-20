import { Routes, Route } from "react-router-dom"


import RutasPublicas from "./routes/RutasPublicas"
import RutasPrivadas from "./routes/RutasPrivadas"





export default function AppRouter() {
  const logaut = false
  return (
    <>

        <Routes>

            <Route path='auth/*' element={
              <RutasPublicas>
              </RutasPublicas>
            }/>
            


            <Route path="/*" element={
              <RutasPrivadas logaut={logaut}>
              </RutasPrivadas>
            }/>


        </Routes>
    </>
  )
}