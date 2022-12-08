import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sessoes/:idFilme" element={<Sessions />}/>
            <Route path="/assentos/:idSessao" element={<Seats />} />
          
          </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
