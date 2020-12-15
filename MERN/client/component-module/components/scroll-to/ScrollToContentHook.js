import React, { useState, useRef } from 'react';

import { longHeroList } from '_core/utils/mock';
import { useUser } from '_core/context/user-context';
import { useCopyToClipboard } from '../../../_shared/hooks/browser-utils';

import './scroll-to-content.scss';

const scrollToView = (ref) => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

function ScrollToContentHook() {
  /**
   * ### react: hooks useState and useRef
   */
  console.log('********', useUser());
  const [darkKnightRef] = useState(React.createRef());
  const wolverineRef = useRef(null);
  const inputRef = useRef('inputField');

  const refList = ['darkKnight', 'wolverine'];
  const refs = { darkKnightRef, wolverineRef };
  return (
    <div className="scroll-to-content">
      <h3 className="component-title">Scroll to view with Functional Component</h3>
      <ul>
        {
          longHeroList.map((hero) => {
            return (
              <li
                key={hero.codeName}
                className="hero-wrapper"
                {...refList.includes(hero.codeName) ? { ref: refs[`${hero.codeName}Ref`] } : {}}
              >
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
        <button onClick={() => { return scrollToView(darkKnightRef); }}>
          Scroll Batman into view
        </button>
        <button onClick={() => { return scrollToView(wolverineRef); }}>
          Scroll Wolverine into view
        </button>
        <input type="text" ref={inputRef} />
        <button onClick={() => { return useCopyToClipboard(inputRef); }}>
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default ScrollToContentHook;
