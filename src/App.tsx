import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackendTest from "./pages/backendTest";
import Checkout from "./pages/checkout";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/yudhvir" element={<BackendTest />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
