import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
const Offers = () => <div className="p-4">Offers Page</div>;
const Schedules = () => <div className="p-4">Schedules Page</div>;


function App() {
  return (
    <Layout>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/schedules" element={<Schedules />} />
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;