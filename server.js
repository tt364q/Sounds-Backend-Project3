const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();

const packsRouter = require('./routes/api/packs');

// const producersRouter = require('./routes/api/producers');

const usersRouter = require('./routes/api/users');


require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/soundPacks', packsRouter);
app.use('/api/users', usersRouter);

// app.use('/api/producers', producersRouter)

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});