import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";

function App() {

  const [ticket, setTicket] = useState({})


  return (
    <>
      <BrowserRouter>
      <Header/>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sessoes/:idFilme" element={<Sessions />}/>
            <Route path="/assentos/:idSessao" element={<Seats  setTicket={setTicket} />} />
            <Route path="/sucesso/" element={<Success ticket={ticket} setTicket={setTicket}/>} />
          
          </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
