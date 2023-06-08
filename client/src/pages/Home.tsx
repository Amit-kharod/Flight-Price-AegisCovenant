import { useState } from 'react';
import { Header } from '../components/Header';
import { FlightSearchForm } from '../components/FlightSearchForm';
import { FlightDetails } from '../components/FlightDetails';

interface ILoginProps {
  isLogin: Boolean;
}

export const Home: React.FC<ILoginProps> = ({ isLogin }) => {
  const [flights, setFlights] = useState([]);
  console.log(flights)

  return (
    <div className="w-[80vw] mx-auto">
      <Header text={'Get go to price of flights in seconds...'} />
      <FlightSearchForm setFlights={setFlights}/>
      {flights.length > 0 ? (
        <FlightDetails flights={flights} />
      ) : (
        <h2>No flights to show</h2>
      )}
    </div>
  );
};
