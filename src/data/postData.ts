import ReactIcon from 'static/images/react.png';
import ReduxIcon from 'static/images/redux.png';
import MUIIcon from 'static/images/material_ui.svg';
import RouterIcon from 'static/images/react-router.svg';

export type BlogState = {
  postList: PostList;
  newsList: NewsList
};

export interface NavigationItem {
  path: string;
  title: string;
}

export const navigationItems: NavigationItem[] = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/blog',
    title: 'Blog',
  }
];

export interface PostList {
  [id: string]: {
    date: string;
    description: string
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  }
}

export const postData: PostList = {
  '1': {
    date: '2020/10/05',
    description: 'React router v6 beta を使ってみよう！',
    image: RouterIcon,
    imageText: 'React router v6 beta',
    linkText: '続きを読む',
    title: 'React v6',
  },
  '2': {
    date: '2020/10/05',
    description: 'Redux v4 を使ってみよう！',
    image: ReduxIcon,
    imageText: 'Redux v4',
    linkText: '続きを読む',
    title: 'Redux v4',
  },
  '3': {
    date: '2020/10/05',
    description: 'Material UI v4 を使ってみよう！',
    image: MUIIcon,
    imageText: 'Material UI v4',
    linkText: '続きを読む',
    title: 'Material UI v4',
  },
  '4': {
    date: '2020/10/05',
    description: 'React Hooks を使ってみよう！',
    image: ReactIcon,
    imageText: 'React Hooks 16.3',
    linkText: '続きを読む',
    title: 'React Hooks 16.3',
  }
};

type NewsItem = {
  date: string;
  description: string,
  title: string;
}

export interface NewsList {
  [id: string]: NewsItem;
}

export const newsData: NewsList = {
  '1': {
    date: '2020/10/05',
    description: 'react: 16.13.1 で Hooks を使いサイトを作成しました。',
    title: 'React v6',
  },
  '2': {
    date: '2020/10/05',
    description: 'react-router: 6.0.0-beta.0 でルーティングも hooks に対応しました。',
    title: 'React router v6 beta',
  },
  '3': {
    date: '2020/10/05',
    description: 'material-ui/core: 4.11.0 で UI を実装しました。',
    title: 'Material-UI v4',
  },
  '4': {
    date: '2020/10/05',
    description: 'redux: 4.0 をインストールしました。',
    title: 'Redux v4',
  },
  '6': {
    date: '2020/10/07',
    description: 'redux: 4.0 でデータを Store に統一しました。',
    title: 'Redux v4',
  },
  '7': {
    date: '2020/10/11',
    description: 'redux-toolkit で reduce と action の実装を変更しました。',
    title: 'Redux-toolkit',
  },
};
