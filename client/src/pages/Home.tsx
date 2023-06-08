import { Header } from '../components/Header';
import { FlightSearchForm } from '../components/FlightSearchForm';

interface ILoginProps {
  isLogin: Boolean;
}

export const Home: React.FC<ILoginProps> = ({ isLogin }) => {
  return (
    <div className="w-[80vw] mx-auto">
      <Header text={'Get go to price of flights in seconds...'} />
      <FlightSearchForm />
    </div>
  );
};
