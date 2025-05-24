require('dotenv').config();

module.exports = {
  "development": {
    "username": "MatriCoolAdminDB",
    "password": "P0pul4r20s5",
    "database": "MatriCoolDB", 
    "host": "127.0.0.1",
    "dialect": "mariadb"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
