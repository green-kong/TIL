import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/common/header';

import Index from './pages/index';
import Comment from './pages/comment';
import Counter from './pages/counter';
import Login from './pages/login';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
