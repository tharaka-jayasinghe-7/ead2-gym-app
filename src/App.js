import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trainers from "./pages/Trainers/Trainers";
import AddTrainers from "./pages/Trainers/AddTrainers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/addTrainers" element={<AddTrainers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
