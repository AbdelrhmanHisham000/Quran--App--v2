import { getAhadith, getAzkar, getQuran, getReciters } from '../services/API';

export async function Quranloader() {
  try {
    const quran = await getQuran();
    return quran;
  } catch (error) {
    console.error('Error fetching Quran data:', error);
    throw new Response('Failed to load Quran data', { status: 500 });
  }
}

export async function Ahadithloader() {
  try {
    const ahadith = await getAhadith();
    return ahadith;
  } catch (error) {
    console.error('Error fetching Ahadith data:', error);
    throw new Response('Failed to load Ahadith data', { status: 500 });
  }
}

export async function Azkarloader() {
  try {
    const azkar = await getAzkar();
    return azkar;
  } catch (error) {
    console.error('Error fetching Azkar data:', error);
    throw new Response('Failed to load Azkar data', { status: 500 });
  }
}

export async function Recitersloader() {
  const Reciters = await getReciters();
  return Reciters;
}
