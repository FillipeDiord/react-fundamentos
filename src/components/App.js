import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
  { title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
  { title: 'Title#03', subtitle: 'Sub#03', likes: 30 },
  { title: 'Title#04', subtitle: 'Sub#04', likes: 60 },
]

export function App() {
  return (
    <>
      <Header title="Blog do JStack's">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}