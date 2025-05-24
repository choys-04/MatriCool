const express = require('express');
const sequelize = require('./src/db/db.js');
const usersRouter = require('./src/routes/usersRouters.js');

const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRouter);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
});
