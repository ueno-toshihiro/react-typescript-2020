import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';
import '@testing-library/jest-dom/extend-expect';
import * as data from '../../data/postData';

// https://github.com/testing-library/jest-dom#tocontainelement

describe('<Home />', () => {
  test('renders Home component', async () => {
    const { findAllByText } = render(<Home list={data.newsData} />);

    const headerElement = await findAllByText(/The Front-end は React で作っています。/i);
    expect(headerElement[0].innerHTML).toBe('The Front-end は React で作っています。');

    const mainFeaturedElement = await findAllByText(/HOME/i);
    expect(mainFeaturedElement[0].innerHTML).toBe('HOME');

    const newsElement = await findAllByText(/News/i);
    expect(newsElement[0].innerHTML).toBe('News');
  });

  test('renders news list', async () => {
    const { getByTestId } = render(<Home list={data.newsData} />);
    expect(Object.keys(data.newsData)).toHaveLength(6);

    const newsListParent = await getByTestId('news_list');
    expect(newsListParent.childNodes).toHaveLength(6);
  });
});
