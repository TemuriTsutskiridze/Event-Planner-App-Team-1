import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <main className="w-full min-h-scroll flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/Sign_in" element={<Login />} />
          <Route path="/Sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
