import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'containers/templates/header';
import HomeContainer from 'containers/templates';
import About from 'components/templates/about';
import Posts from 'containers/templates/posts';
import PostList from 'components/templates/postList';
import Post from 'components/pages/post';
import Container from '@material-ui/core/Container';

const App = (): JSX.Element => (
  <Container maxWidth="lg">
    <Router>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<HomeContainer />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Posts />}>
            <Route path="/" element={<PostList />} />
            <Route path=":slug" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </Container>
)

export default App;
