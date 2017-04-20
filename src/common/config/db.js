'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: 'localhost',
      port: '3306',
      database: 'freelance',
      user: 'root',
      password: 'root',
      prefix: '',
      encoding: 'utf8'
    }
  }
};