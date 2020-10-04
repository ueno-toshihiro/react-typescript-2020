import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { postData } from 'data/postData';

const Post: FC = ():JSX.Element => {
  const { slug } = useParams();
  const post = postData[slug];
  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Post;
