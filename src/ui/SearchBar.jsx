import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();
  function handleNavigate(sheikhName) {
    if (!sheikhName.trim()) {
      alert('Please enter a valid name!');
      return;
    }
    navigate(`/shyookh/${sheikhName}`);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNavigate(query);
        setQuery('');
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }}
    >
      <input
        ref={inputRef}
        placeholder="ادخل اسم الشيخ"
        style={{ direction: 'rtl' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-md w-auto rounded-full bg-white bg-gradient-to-r px-4 py-2 text-stone-500 transition-all duration-300 placeholder:text-stone-500/100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchBar;
