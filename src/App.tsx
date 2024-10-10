import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <main className="w-full min-h-scroll flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
