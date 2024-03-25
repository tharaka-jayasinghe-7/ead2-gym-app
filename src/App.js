import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trainer from "./pages/Trainers/Trainer";
import AddTrainers from "./pages/Trainers/AddTrainers";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/trainers" element={<Trainer />} />
          <Route path="/addTrainers" element={<AddTrainers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
