import { useState } from 'react';

export const FlightSearchForm = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [cities, setCities] = useState('');

  return (
    <form className='flex flex-col items-center'>
      <div className="w-full flex flex-col gap-10 md:flex-row md:item">
        <div className="relative basis-[40%]">
          <label htmlFor="source" className="absolute top-[-25px]">
            Source
          </label>
          <input
            type="text"
            name="source"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="border-2 rounded-sm w-full py-2 px-2 md:w-full"
          />
        </div>
        <div className="relative basis-[40%]">
          <label htmlFor="destination" className="absolute top-[-25px]">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-2 rounded-sm w-full py-2 px-2 md:w-[100%]"
          />
        </div>
        <div className="relative basis-[20%]">
          <label htmlFor="date" className="absolute top-[-25px]">
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="py-2 px-2 border-2 basis-[20%]"
          />
        </div>
      </div>
      <button className=" transition-all ease-in-out duration-200 text-lg text-gray-90 w-full border-solid border-2 border-gray-800 my-10 md:w-1/3 sm:px-4 sm:py-2 px-2 py-1 rounded-sm hover:bg-gray-800 hover:text-white">
        Get Flights
      </button>
    </form>
  );
};
