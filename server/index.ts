import express from 'express';
import flightPrice from './routes/api/flight-price';
import cities from './routes/api/cities';
import connectDB from './config/mongodb';

const app = express();

// Connecting MongoDB
connectDB();

app.use(express.json());

app.use('/flight-price', flightPrice);
app.use('/cities', cities);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
