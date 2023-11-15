import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
