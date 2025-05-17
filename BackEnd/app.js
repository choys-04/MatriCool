const express = require('express');
const sequelize = require('./DB/db.js');
const User = require('./models/Users.js');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
});
