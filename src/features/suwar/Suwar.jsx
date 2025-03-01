import { useLoaderData } from 'react-router-dom';
import SuraItem from './SuraItem';

function Suwar() {
  const Quran = useLoaderData();
  const QuranAyahs = Quran?.surahs || [];

  if (!QuranAyahs.length) {
    return (
      <div className="m-20 text-center">No Surahs available to display.</div>
    );
  }
  return (
    <div
      className="m-20 flex flex-wrap justify-center"
      style={{ direction: 'rtl' }}
    >
      {QuranAyahs.map((ayah) => (
        <SuraItem key={ayah.number} number={ayah.number} suraName={ayah.name} />
      ))}
    </div>
  );
}

export default Suwar;
