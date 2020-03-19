import React, { Component }   from 'react';
import { Link, NavLink }               from 'react-router-dom';

export default class ComponentsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const componentLinkList = [
      {
        path: '/components/loader',
        name: 'Loader'  
      }, {
        path: '/components/table',
        name: 'Table'  
      }, {
        path: '/components/button',
        name: 'Button'  
      }, {
        path: '/components/input-field',
        name: 'Input Field'  
      }, {
        path: '/components/scroll-to',
        name: 'Scroll To Content'  
      }, {
        path: '/components/scroll-to-hook',
        name: 'Scroll To Content - Hook'  
      }
    ];
    return (
      <div className='component-list'>
        <div className='component-section'>
          {
            componentLinkList.map(component => {
              return (
                <NavLink key={component.path}
                  to={component.path}
                  className='section-item'
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
