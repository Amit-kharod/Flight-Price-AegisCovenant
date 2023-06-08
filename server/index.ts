import express from 'express';
import flightPrice from './routes/api/flight-price';

const app = express();

app.use(express.json());

app.use('/flight-price', flightPrice);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
