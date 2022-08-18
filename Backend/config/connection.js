import { connect, connection } from 'mongoose';
require('dotenv').config();

connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cineview',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

export default connection;