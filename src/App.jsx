
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from "./components/Herosection";
import BookNow from "./components/BookNow";
import BestOnes from "./components/BestOnes";


function App() {


  return (
   
    <div className=""> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/bestones" element={<BestOnes/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
