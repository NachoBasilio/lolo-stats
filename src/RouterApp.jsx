import { Routes, Route } from "react-router-dom"




import RutasPublicas from "./auth/routes/RutasPublicas"
import RutasPrivadas from "./stats/routes/RutasPrivadas"





export default function AppRouter() {
  const logaut = true
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