import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


/*
  Future components (abhi nahi bane, baad me add karna)
  import Login from "./components/Login";
  import Signup from "./components/Signup";
  import Dashboard from "./components/Dashboard";
  import Interview from "./components/Interview";
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        
        {/*
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        */}

        {/* Protected / App Routes */}
        {/*
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview" element={<Interview />} />
        */}

        {/* 404 Page (later) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
