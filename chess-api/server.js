const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());

// import routes
const gameRoutes = require('./routes/game.routes');
app.use('/games', gameRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Chess API running on port ${PORT}`);
});
