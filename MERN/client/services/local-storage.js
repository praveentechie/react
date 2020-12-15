const LocalStorage = {
  getLocalStorage() {
    if (!window.localStorage) {
      throw new Error('Local storage is not supported by the browser!!!');
    }
    return window.localStorage;
  },
  getValue(key) {
    return this.getLocalStorage().getItem(key);
  },
  setValue(key, value) {
    this.getLocalStorage().setItem(key, value);
  }
};

export default LocalStorage;
