import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/home';
import Comment from './pages/comment';
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <Router>
      <Link to="/">Home</Link>
      {isLogin && <Link to="Comment">Comment</Link>}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
