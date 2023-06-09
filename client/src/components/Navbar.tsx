import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

interface ILoginProps {
  isLogin: Boolean;
}

export const Navbar: React.FC<ILoginProps> = ({  }) => {
  return (
    <div className="flex sm:mx-4 my-2 justify-end font-bold items-center">
      <Link to="/" className="mr-auto mx-2 sm:text-2xl text-gray-600">
        <h2>Flight Price API</h2>
      </Link>
      <a
        href="https://github.com/Amit-kharod/Flight-Price-AegisCovenant"
        target="_blank"
        className="self-center mx-4"
      >
        <button className="flex ">
          <AiFillGithub className="text-xl sm:mx-1" />
          <h2 className='hidden sm:block'>Source Code</h2>
        </button>
      </a>
      <Link
        to="/login"
        className="transition-all ease-in-out duration-200 text-xs sm:text-lg text-gray-90 border-solid border-2 border-gray-800 sm:px-4 sm:py-2 px-2 py-1 rounded-sm hover:bg-gray-800 hover:text-white"
      >
        <button>Login</button>
      </Link>
      <Link
        to="/signup"
        className="transition-all ease-in-out duration-200 text-xs sm:text-lg text-gray-90 border-solid border-2 border-gray-800 sm:px-4 sm:py-2 px-2 py-1 rounded-sm hover:bg-gray-800 hover:text-white mx-2 sm:mx-4"
      >
        <button>Sign Up</button>
      </Link>
    </div>
  );
};
