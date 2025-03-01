import { useLoaderData } from 'react-router-dom';
import { getTafseer } from '../../services/API';
import LinkButton from '../../ui/LinkButton';

import React from 'react';

function SuwarTafseer() {
  const tafseer = useLoaderData();

  const { result } = tafseer;
  const verses = result.map((verse) => ({
    aya: verse.aya,
    arabic_text: verse.arabic_text,
    translation: verse.translation,
  }));

  const formattedText = verses.map((verse, index) => (
    <div key={index} className="mb-3">
      <span className="text-xl font-bold text-[#8b0000]">
        الاية رقم {verse.aya}
      </span>
      {' : '}
      <span className="text-xl font-bold text-[#8b0000]">
        {verse.arabic_text}
      </span>
      {' : '}
      <span className="text-xl font-bold text-black">{verse.translation}</span>
    </div>
  ));

  return (
    <>
      <div className="scrollbar-custom mx-auto mt-4 max-h-[500px] w-full max-w-lg overflow-auto rounded-lg border border-gray-300 bg-white p-4 shadow-lg sm:mt-6 sm:max-w-2xl md:max-w-3xl">
        {formattedText}
      </div>

      <div className="ml-10 flex justify-start">
        <LinkButton to={'/suwar'}> &larr; Back to Suwar Page</LinkButton>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const tafseer = await getTafseer(params.suraId);
  return tafseer;
}

export default SuwarTafseer;
