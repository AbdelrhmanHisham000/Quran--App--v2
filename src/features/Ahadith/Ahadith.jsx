import { useLoaderData } from 'react-router-dom';
import AhadithItem from './AhadithItem';
function Ahadith() {
  const Ahadith = useLoaderData();

  return (
    <div
      className="m-20 flex flex-wrap justify-center"
      style={{ direction: 'rtl' }}
    >
      {Ahadith.map((hadith) => (
        <AhadithItem key={hadith.number} number={hadith.number} />
      ))}
    </div>
  );
}



export default Ahadith;
