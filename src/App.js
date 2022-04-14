import "./styles.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import Signin from "./components/signin/Signin";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (isAuth === true) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <Routes>
      <Route path="*" element={<Signin setAuth={setAuth} />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
