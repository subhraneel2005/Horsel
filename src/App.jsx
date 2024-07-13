
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from "./components/Herosection";
import BookNow from "./components/BookNow";


function App() {


  return (
   
    <div className=""> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
