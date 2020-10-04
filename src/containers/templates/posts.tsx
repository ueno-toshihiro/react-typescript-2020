import React from 'react';
import { Outlet } from 'react-router-dom';

const Posts = (): JSX.Element => (
  <div style={{ padding: 20 }}>
    <h2>Blog</h2>
    <Outlet />
  </div>
)

export default Posts;
