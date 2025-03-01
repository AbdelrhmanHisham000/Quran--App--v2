import { useNavigate } from 'react-router-dom';

function AhadithItem({ number }) {
  const navigate = useNavigate();
  function handleHadithNumber(e) {
    e.preventDefault();
    navigate(`/ahadith/${number}`);
  }
  return (
    <div className="m-4 flex h-40 w-40 flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg">
      <div className="text-lg font-semibold text-blue-600">الحديث {number}</div>
      <div className="flex items-center justify-center">
        <p className="cursor-pointer text-4xl" onClick={handleHadithNumber}>
          &#128214;
        </p>
      </div>
    </div>
  );
}

export default AhadithItem;
