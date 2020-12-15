import React from 'react';
import ReactDOM from 'react-dom';
import { bootstrap } from './bootstrap';
import RootPage from './RootPage';
import PageProvider from './PageProvider';

window.React = React;

const render = ({ store, reducerRegistry }) => {
  ReactDOM.render(
    <RootPage store={store}>
      <PageProvider reducerRegistry={reducerRegistry} />
    </RootPage>,
    document.getElementById('mount')
  );
};

bootstrap().then(render);
