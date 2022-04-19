import "./App.css";
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistory from "../OrderHistory/OrderHistory";
import { Routes, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
