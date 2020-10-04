import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { postData } from 'data/postData';

const PostLists: FC = ():JSX.Element => (
  <ul>
    {Object.entries(postData).map(([slug, { title }]) => (
      <li key={slug}>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </li>
    ))}
  </ul>
)

export default PostLists;
