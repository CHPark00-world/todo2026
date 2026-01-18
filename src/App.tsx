import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AllTasks from "./pages/AllTasks.tsx";
import Settings from "./pages/Settings.tsx";
import Stats from "./pages/Stats.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<AllTasks />} />
            <Route path="/report" element={<Stats />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
