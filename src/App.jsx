import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./layout/Loader";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { route } from "./routes";

const App = () => {
  return (
    <div>
      <Router>
        {/* Navbar */}
        <Navbar />
        {/* Route Configuration */}
        <Suspense fallback={<div><Loader /></div>}>
          <Routes>
            {route.map(({ id, path, component: Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
