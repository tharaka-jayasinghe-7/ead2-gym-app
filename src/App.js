import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./Members";
import Trainers from "./pages/Trainers/Trainers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/members" element={<Members />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
