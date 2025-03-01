import { useNavigate } from 'react-router-dom';

function SuraItem({ number, suraName }) {
  const navigate = useNavigate();
  function handleSuraNumber(e) {
    e.preventDefault();
    navigate(`/suwar/${number}`);
  }

  function handleSuraTafseerNumber(e) {
    e.preventDefault();
    navigate(`/suwar/tafseer/${number}`);
  }

  return (
    <div className="m-4 flex h-40 w-42 flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg">
      <div className="text-lg font-semibold text-blue-600">{suraName}</div>
      <div className="flex items-center justify-center">
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-md">
          {number}
        </button>
        <div className="button-17 relative">
          <p className="cursor-pointer text-4xl" onClick={handleSuraNumber}>
            &#128214;
          </p>
          <span className="tooltiptext">القرأن الكريم</span>
        </div>
        <div className="button-17 relative">
          <p
            onClick={handleSuraTafseerNumber}
            className="cursor-pointer text-4xl"
          >
            &#128214;
          </p>
          <span className="tooltiptext">التفسير</span>
        </div>
      </div>
    </div>
  );
}

export default SuraItem;

