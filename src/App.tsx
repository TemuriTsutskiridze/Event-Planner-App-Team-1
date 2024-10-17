import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Events from "./Pages/Events";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <main className="w-full min-h-scroll flex flex-col items-center">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/Sign_in" element={<Login />} />
            <Route path="/Sign_up" element={<SignUp />} />
            <Route path="/events" element={<Events />} />
          </Routes>
          <ToastContainer />
        </UserProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
