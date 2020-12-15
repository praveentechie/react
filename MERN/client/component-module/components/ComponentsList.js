import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../component.constants';

export default class ComponentsList extends Component {
  render() {
    const componentLinkList = [
      {
        path: routes.LOADER,
        name: 'Loader'
      }, {
        path: routes.TABLE,
        name: 'Table'
      }, {
        path: routes.BUTTON,
        name: 'Button'
      }, {
        path: routes.INPUT_FIELD,
        name: 'Input Field'
      }, {
        path: routes.SCROLL_TO,
        name: 'Scroll To Content'
      }, {
        path: routes.SCROLL_TO_HOOK,
        name: 'Scroll To Content - Hook'
      }, {
        path: routes.ERROR_BOUNDARY,
        name: 'Error boundary'
      }
    ];
    return (
      <div className="component-list">
        <div className="component-section">
          {
            componentLinkList.map((component) => {
              return (
                <NavLink
                  key={component.path}
                  to={component.path}
                  className="section-item"
                  activeClassName="selected-component"
                >
                  {component.name}
                </NavLink>
              );
            })
          }
        </div>
      </div>
    );
  }
}
