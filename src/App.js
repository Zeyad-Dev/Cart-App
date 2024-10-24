import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import NavComponent from "./components/Navbar";
import { Route, Routes } from "react-router";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="products/:id" element={<ViewDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
