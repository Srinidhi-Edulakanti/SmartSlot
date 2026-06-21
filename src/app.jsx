import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import RoleSelect from "./pages/RoleSelect";
import Admin from "./pages/Admin";
import ServiceOptions from "./pages/ServiceOptions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/role" element={<RoleSelect />} />
        <Route path="/services"element={<ServiceOptions />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;