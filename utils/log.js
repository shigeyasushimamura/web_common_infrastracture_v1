/* eslint-disable no-console */

export default class log {
  static info = (obj) => {
    console.info(obj);
  };
  static warn = (obj) => {
    console.warn(obj);
  };
  static error = (obj) => {
    console.error(obj);
  };
}
