require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cfg = require('./config');

const postMessageRoutes = require('./controllers/postMessageController');
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.listen(cfg.port, () => console.log(`Server started at: ${cfg.port}`));

app.use('/postMessages', postMessageRoutes);
