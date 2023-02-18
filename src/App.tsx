import { Routes, Route } from "react-router-dom";
import { Chart, Form } from "@/pages";

// push to gh

const App = () => (
  <Routes>
    <Route path="/" element={<Form />} />
    <Route path="/chart/:username" element={<Chart />} />
  </Routes>
);

export default App;
