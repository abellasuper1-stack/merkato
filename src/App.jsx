import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Shops from "./pages/Shops.jsx";
import Trending from "./pages/Trending.jsx";
import NewArrivals from "./pages/NewArrivals";
import Discounts from "./pages/Discount.jsx";

function App() {
  return (
    
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/discounts" element={<Discounts />} />
      </Routes>
    </div>
  );
}

export default App;