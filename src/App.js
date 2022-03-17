import "./App.css";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Payment from "./components/Payment";
import ProductPage from "./components/ProductPage";
import { Route, Routes } from "react-router-dom";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/account" element={<Login />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/confirm" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
