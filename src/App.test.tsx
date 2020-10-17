import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import * as data from './data/postData';

/**
 * jest-dom
 * https://github.com/testing-library/jest-dom#tocontainelement
 *
 * react-router
 * https://testing-library.com/docs/example-react-router
 */

describe('<APP />', () => {
  let rnd: any;

  beforeEach(() => {
    const store = createStore(rootReducer, { postList: data.postData, newsList: data.newsData });

    rnd = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('renders home page', async () => {
    const headerElement = await rnd.findAllByText(/THE FRONT-END/i);
    expect(headerElement[0].innerHTML).toBe('THE FRONT-END');

    const mainFeaturedElement = await rnd.findAllByText(/Home/i);
    expect(mainFeaturedElement[0].innerHTML).toBe('Home');

    const newsElement = await rnd.findAllByText(/News/i);
    expect(newsElement[0].innerHTML).toBe('News');
  });

  test('routing about page', async () => {
    const button = await rnd.getByText(/about/i);
    expect(button.innerHTML).toBe('About');

    userEvent.click(button);
    const aboutPageElement = await rnd.getByText(/About Front Engineer Blog/i);
    expect(aboutPageElement.innerHTML).toBe('About Front Engineer Blog');
  });
});
