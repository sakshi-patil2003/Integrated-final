import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Computer from './pages/Computer';
import Mechanical from './pages/Mechanical';
import ENTC from './pages/Entc';
import AIDS from './pages/Aids';
import IT from './pages/It';  // IT page with chatbot
import Navbar from './pages/Navbar';
import ApplyNowButton from './components/ApplyNowButton'; 
import BbaMba from './pages/IntegratedBbaMba'
import BcaMca from './pages/IntegratedMcaBca'

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/comp" element={<PageWithDynamicTitle title="Comp" />} />
          <Route path="/mech" element={<PageWithDynamicTitle title="Mech" />} />
          <Route path="/it" element={<PageWithDynamicTitle title="IT" />} />
          <Route path="/entc" element={<PageWithDynamicTitle title="ENTC" />} />
          <Route path="/aids" element={<PageWithDynamicTitle title="AIDS" />} />
          <Route path="/bbamba" element={<BbaMba title="BbaMba" />} />
          <Route path="/bcamca" element={<BcaMca title="BcaMca" />} />
        </Routes>
        <ApplyNowButton />
      </div>
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>

      {/* Render the component based on the route */}
      {title === "Comp" && <Computer />}
      {title === "Mech" && <Mechanical />}
      {title === "ENTC" && <ENTC />}
      {title === "AIDS" && <AIDS />}
      
      {title === "BcaMca" && <BcaMca/>}
      {title === "BbaMba" && <BbaMba/>}
      {title === "IT" && <IT />} {/* IT page with chatbot */}

    </>
  );
}

export default App;
