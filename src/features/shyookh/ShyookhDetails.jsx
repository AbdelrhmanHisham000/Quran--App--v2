import { useFetcher, useLoaderData, useParams } from 'react-router-dom';
import Sura from './Sura';
import { useEffect, useState } from 'react';
// import { getReciters } from '../../services/API';

function ShyookhDetails() {
  const fetcherOfSuraName = useFetcher();
  const { sheikhName } = useParams();
  const { reciters } = useLoaderData();
  console.log(sheikhName);

  //! State for handling user input and suggestions
  const [inputValue, setInputValue] = useState(sheikhName || '');
  /*
  This means inputValue will only be set to the sheikhName when the component is first mounted.
  When you navigate to a new Sheikh's page, React reuses the existing component instance (instead of unmounting and remounting it).
Since the useState initializer (sheikhName || '') only runs once when the component is first created, the inputValue does not update when the URL's sheikhName changes.
  */
  const [suggestions, setSuggestions] = useState([]);

  //! Sync inputValue with URL parameter

  //! Fetch Quran data
  useEffect(function () {
    fetcherOfSuraName.load('/suwar');
  }, []);

  //! Prepare the list of reciters
  const recitersDataArr = reciters.map((el) => ({
    name: el.name,
    id: el.id,
    server: el.moshaf[0].server,
  }));

  //! Filter reciters based on input
  useEffect(() => {
    if (inputValue.trim() === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = recitersDataArr.filter((reciter) => {
        const name = reciter.name.toLowerCase();
        const query = inputValue.trim().toLowerCase();
        return name.startsWith(query) || name.endsWith(query);
      });
      setSuggestions(filteredSuggestions);
    }
  }, []);

  //! Handle user selection
  const handleSelection = (name) => {
    setInputValue(name);
    setSuggestions([]);
  };

  //! Find selected Sheikh
  const selectedSheikh = recitersDataArr.find(
    (reciter) => reciter.name.toLowerCase() === inputValue.toLowerCase(),
  );

  // console.log(selectedSheikh);

  const Quran = fetcherOfSuraName.data;
  const QuranAyahs = Quran?.surahs || [];
  QuranAyahs.push();

  return (
    <div className="m-20" style={{ direction: 'rtl' }}>
      {!selectedSheikh ? (
        <div className="relative right-5 mb-4">
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSelection(suggestion.name)}
                  className="cursor-pointer px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {QuranAyahs.length > 0 ? (
            QuranAyahs.map((ayah) => (
              <Sura
                key={ayah.number}
                number={ayah.number}
                suraName={ayah.name}
                selectedSheikh={selectedSheikh}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No suras available for this Sheikh.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ShyookhDetails;

/*
 return (
    <div className="m-20" style={{ direction: 'rtl' }}>
      <div className="relative right-5 mb-4">
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleSelection(suggestion.name)}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedSheikh ? (
        <div className="flex flex-wrap justify-center">
          {QuranAyahs.map((ayah) => (
            <Sura
              key={ayah.number}
              number={ayah.number}
              suraName={ayah.name}
              selectedSheikh={selectedSheikh}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Please select a Sheikh.</p>
      )}
    </div>
  );
*/
