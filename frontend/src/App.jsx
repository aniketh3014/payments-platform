import { BrowserRouter } from "react-router-dom"
import "./index.css";
import { RecoilRoot } from "recoil";
import AppRoute from "./pages/AppRoute.jsx";


function App() {

  return (
    <>
      <RecoilRoot>    
      <BrowserRouter>
          <AppRoute/>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
