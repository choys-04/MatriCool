module.exports = {
  username: process.env.DB_USER || "MatriCoolAdminDB",
  password: process.env.DB_PASS || "P0pul4r20s5",
  database: process.env.DB_DATABASE || "MatriCoolDB",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mariadb",
  port: process.env.DB_PORT || "3306",
  aport: process.env.DB_APORT || "4321",
};
