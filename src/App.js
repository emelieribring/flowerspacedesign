import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Content from './Components/MiddleContent';
import Footer from './Components/Footer';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/content" element={<Content />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;