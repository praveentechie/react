import React from 'react';
import ReactDOM from 'react-dom';
import bootstrapClient from './bootstrap';
import RootPage from './RootPage';
import PageProvider from './PageProvider';

if (process.env.NODE_ENV === 'development') {
  window.React = React;
}
// ### webpack HMR - hot module replacement will not happen without the below line
if (module.hot) {
  module.hot.accept();
}

const render = ({ store, reducerRegistry }) => {
  ReactDOM.render(
    <RootPage store={store}>
      <PageProvider reducerRegistry={reducerRegistry} />
    </RootPage>,
    document.getElementById('mount')
  );
};

bootstrapClient().then(render);
