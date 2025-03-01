export const API_RECITERS_URL = 'https://mp3quran.net/api/v3/reciters';
export const API_SUWAR_URL = 'https://mp3quran.net/api/v3/suwar?language=ar';
export const API_HADITH_URL = `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=50`;
export const API_QURAN_TAFSEER = `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/`;

const API_QURAN = 'https://api.alquran.cloud/v1/quran';
const API_ALADHAN =
  'https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8';
const API_ALAZKAR =
  'https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json';

export async function getReciters() {
  const res = await fetch(`${API_RECITERS_URL}`);
  if (!res.ok) throw Error(`Couldn't Find`);

  const data = await res.json();
  return data;
}

export async function getQuran() {
  const res = await fetch(`${API_QURAN}`);
  if (!res.ok) throw Error(`Couldn't Find`);

  const { data } = await res.json();
  return data;
}

export async function getAhadith() {
  const res = await fetch(`${API_HADITH_URL}`);
  if (!res.ok) throw Error(`Couldn't Find`);

  const data = await res.json();
  return data.items;
}

export async function getTafseer(suraNumber) {
  const res = await fetch(
    `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${suraNumber}`,
  );
  if (!res.ok) throw Error(`Couldn't Find`);

  const data = await res.json();
  return data;
}

export async function getAdahan() {
  const res = await fetch(`${API_ALADHAN}`);
  if (!res.ok) throw Error(`Couldn't Find`);

  const data = await res.json();
  return data;
}

export async function getAzkar() {
  const res = await fetch(`${API_ALAZKAR}`);
  if (!res.ok) throw Error(`Couldn't Find`);

  const data = await res.json();
  return data;
}

/*
const API_SuWAR = 'https://example.com/quran-images/{10}.jpg';
fetch(API_SuWAR)
  .then((res) => res.json()) // Fix: Call `json()` as a function
  .then((data) => {
    console.log(data); // Log the fetched data here
  })
  .catch((error) => console.error('Error fetching data:', error));
  */
