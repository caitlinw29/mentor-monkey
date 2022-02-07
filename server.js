const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// socket.io connection

io.on('connection', (socket) => {
  socket.on('send-chat-message', (message) => {
    //broadcast will send to all users except current user
    socket.broadcast.emit('chat-message', message);
  });
});

sequelize.sync({ force: true }).then(() => {
  // USE SERVER FOR CHAT - we connect app to server above
  server.listen(PORT, () => {
    console.log('http://localhost:3001');
  });
});
