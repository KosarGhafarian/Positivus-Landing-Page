import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/#services" element={<Home />} />
      <Route path="/#casestudies" element={<Home />} />
      <Route path="/#workingprocess" element={<Home />} />
      <Route path="/#team" element={<Home />} />
      <Route path="/#testimonials" element={<Home />} />
    </Routes>
  );
};

export default App;
