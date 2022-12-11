import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";

function App() {

  const [ticket, setTicket] = useState({})
  // const [selectedSeats, setSelectedSeats] = useState([]);

  // //Faz o click em cada componente Seat
  // function handleSeat(seat) {
  //   //Aqui o seat é o próprio objeto que disparou o onClick
  //   if (seat.status === "unavailable") {
  //     return;
  //   }

  // }


  return (
    <>
      <BrowserRouter>
      <Header/>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sessoes/:idFilme" element={<Sessions />}/>
            <Route path="/assentos/:idSessao" element={<Seats  setTicket={setTicket} ticket={ticket}/>} />
            <Route path="/sucesso/" element={<Success ticket={ticket} setTicket={setTicket}/>} />
          
          </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
