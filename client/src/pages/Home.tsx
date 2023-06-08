import { Header } from "../components/Header";

interface ILoginProps {
  isLogin: Boolean;
}

export const Home: React.FC<ILoginProps> = ({ isLogin }) => {
  return <div className="max-w-[80vw] mx-auto">
    <Header text={"Get go to price of flights in seconds..."} />
  </div>;
};


