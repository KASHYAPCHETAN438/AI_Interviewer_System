import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import InterviewDashboard from "./components/InterviewDashboard";
import CompareInterviews from "./components/CompareInterviews";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<InterviewDashboard />} />
        <Route path="/compare" element={<CompareInterviews />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
