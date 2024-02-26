import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup.jsx"
import "./index.css";
import Signin from "./pages/Signin.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import { RecoilRoot } from "recoil";

function App() {


  return (
    <>
      <RecoilRoot>    
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/send" element={<SendMoney />} />  */}
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App