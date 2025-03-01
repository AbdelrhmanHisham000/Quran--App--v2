import { useLoaderData } from 'react-router-dom';
import { getAdahan } from '../../services/API';

function Aladhan() {
  const aladhan = useLoaderData();
  const elMwaqit = aladhan.data.timings;
  const prayerTimes = [
    { name: 'الفجر', time: `${elMwaqit.Fajr} AM` },
    { name: 'الشروق', time: `${elMwaqit.Sunrise} AM` },
    { name: 'الظهر', time: `${elMwaqit.Dhuhr} PM ` },
    { name: 'العصر', time: `${elMwaqit.Asr} PM` },
    { name: 'المغرب', time: `${elMwaqit.Maghrib} PM` },
    { name: 'العشاء', time: `${elMwaqit.Isha} PM` },
  ];

  return (
    <div className="font-sans text-gray-800">
      <header className="py-4 text-center text-black">
        <h1 className="mt-5 text-2xl font-bold">مواقيت الصلاة</h1>
        <p className="text-sm">تعرف على مواقيت الصلاة في مدينتك</p>
      </header>

      <main className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
        {prayerTimes.map((prayer, index) => (
          <div
            key={index}
            className="mb-2 flex items-center justify-between rounded-md border border-gray-200 bg-gray-100 px-4 py-2"
          >
            <span className="text-sm text-gray-600">{prayer.time}</span>
            <h3 className="text-lg font-semibold text-blue-600">
              {prayer.name}
            </h3>
          </div>
        ))}
      </main>

      <footer className="mt-4 py-2 text-center text-black">
        &copy; 2024 تطبيق مواقيت الصلاة
      </footer>
    </div>
  );
}

export async function loader() {
  const adahan = await getAdahan();
  return adahan;
}

export default Aladhan;
