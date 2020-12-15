export default class ReducerRegistry {
  constructor(initialReducers = {}) {
    this._reducers = { ...initialReducers };
    this._emitChange = null;
  }

  register(newReducers) {
    const originalSize = Object.keys(this._reducers).length;
    this._reducers = { ...this._reducers, ...newReducers };
    const newSize = Object.keys(this._reducers).length;
    if (this._emitChange !== null && (originalSize !== newSize)) {
      this._emitChange(this.getReducers());
    }
  }

  getReducers() {
    return { ...this._reducers };
  }

  setChangeListener(listener) {
    if (this._emitChange !== null) {
      throw new Error('Can only set the listener for a ReducerRegistry once.');
    }
    this._emitChange = listener;
  }
}
