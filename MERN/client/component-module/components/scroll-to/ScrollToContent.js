import React, { Component } from 'react';
import { longHeroList } from '_core/utils/mock';
import './scroll-to-content.scss';

export default class ScrollToContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkKnightRef: React.createRef(),
      wolverineRef: React.createRef()
    };
  }

  scrollToView = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  render() {
    const refList = ['darkKnight', 'wolverine'];
    return (
      <div className="scroll-to-content">
        <h3 className="component-title">Scroll to view with Class Component</h3>
        <ul>
          {
            longHeroList.map((hero) => {
              return (
                <li key={hero.codeName} className="hero-wrapper" {...refList.includes(hero.codeName) ? { ref: this.state[`${hero.codeName}Ref`] } : {}}>
                  <span className="hero-studio">{hero.name}</span>
                  <div>
                    <div className="hero-name">
                      {hero.studio}
                    </div>
                    <span className="hero-power">
                      Powers:
                      {' '}
                      {hero.specialPower.join(', ')}
                    </span>
                  </div>
                </li>
              );
            })
          }
        </ul>
        <div className="action-container">
          <button onClick={() => { return this.scrollToView(this.state.darkKnightRef); }}>
            Scroll Batman into view
          </button>
          <button onClick={() => { return this.scrollToView(this.state.wolverineRef); }}>
            Scroll Wolverine into view
          </button>
        </div>
      </div>
    );
  }
}
