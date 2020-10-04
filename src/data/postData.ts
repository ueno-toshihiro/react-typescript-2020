interface PostListsProps {
  [id: string]: {
    title: string;
    description: string
  }
}

export const postData: PostListsProps = {
  '1': {
    title: 'First',
    description: 'First post description.'
  },
  '2': {
    title: 'Second',
    description: 'Second post description.'
  }
};
