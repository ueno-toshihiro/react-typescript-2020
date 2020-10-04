import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from 'components/templates';
import About from 'components/templates/about';
import Posts from 'containers/templates/posts';
import PostLists from 'components/pages/postLists';
import Post from 'components/pages/post';

const App = (): JSX.Element => (
  <Router>
    <nav>
      <Link to="/" style={{paddingRight: 20}}>Top</Link>
      <Link to="/about" style={{paddingRight: 20}}>About</Link>
      <Link to="/posts" style={{paddingRight: 20}}>Posts</Link>
    </nav>
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />}>
          <Route path="/" element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)

export default App;
