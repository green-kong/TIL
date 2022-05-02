import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from './pages/index/index';
import Counter from './pages/counter';
import Comment from './pages/comment';
import Login from './pages/login';
import Header from './component/header';

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
