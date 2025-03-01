// import { useLoaderData, useParams } from 'react-router-dom';
// import formatText from '../../utils/Helpers';
// import { useEffect, useState } from 'react';
// import LinkButton from '../../ui/LinkButton';

// function SuwarDetails() {
//   const Quran = useLoaderData();

//   const { suraId } = useParams();
//   console.log(suraId);

//   const [progress, setProgress] = useState(() => {
//     const storedProgress = localStorage.getItem('surahProgress');

//     return storedProgress ? JSON.parse(storedProgress) : {};
//   });

//   const updateProgress = (newAyah) => {
//     const updatedProgress = { ...progress, [suraId]: newAyah };
//     setProgress(updatedProgress);
//   };
//   const noOfAyah = progress[suraId] || 0;

//   const QuranAyahs = Quran.surahs[+suraId - 1].ayahs;

//   // console.log(QuranAyahs)

//   useEffect(() => {
//     localStorage.setItem('surahProgress', JSON.stringify(progress));
//   }, [progress]);

//   const bigText = QuranAyahs.reduce((acc, curr, index) => {
//     console.log(curr, index);
//     const number = index + 1; // Ayah number
//     let text = curr.text; // Ayah text
//     // console.log(text);

//     // Check and remove the phrase if it exists
//     if (
//       curr.page !== 1 &&
//       curr.number !== 3189 &&
//       text.includes('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ')
//     ) {
//       text = text.replace('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ', '').trim();
//     }

//     return [...acc, { text, number }];
//   }, []);

//   return (
//     <div>
//       {suraId === '9' || suraId === '1' ? (
//         ''
//       ) : (
//         <p className="mt-6 text-center text-2xl">
//           بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِیمِ
//         </p>
//       )}
//       {formatText(bigText, noOfAyah, updateProgress)}
//       <LinkButton to={'/suwar'}>&larr; Back to Suwar Page</LinkButton>
//     </div>
//   );
// }

// export default SuwarDetails;


import { useLoaderData, useParams } from 'react-router-dom';
import formatText from '../../utils/Helpers';
import { useEffect, useState } from 'react';
import LinkButton from '../../ui/LinkButton';

function SuwarDetails() {
  const Quran = useLoaderData();
  const { suraId } = useParams();

  const [progress, setProgress] = useState(() => {
    const storedProgress = localStorage.getItem('surahProgress');
    return storedProgress ? JSON.parse(storedProgress) : {};
  });

  const updateProgress = (newAyah) => {
    const updatedProgress = { ...progress, [suraId]: newAyah };
    setProgress(updatedProgress);
  };

  const noOfAyah = progress[suraId] || 0;
  const QuranAyahs = Quran.surahs[+suraId - 1].ayahs;

  useEffect(() => {
    localStorage.setItem('surahProgress', JSON.stringify(progress));
  }, [progress]);

  const bigText = QuranAyahs.reduce((acc, curr, index) => {
    let text = curr.text;
    const number = index + 1; // Ayah number

    if (
      curr.page !== 1 &&
      curr.number !== 3189 &&
      text.includes('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ')
    ) {
      text = text.replace('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ', '').trim();
    }

    return [...acc, { text, number }];
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {suraId === '9' || suraId === '1' ? null : (
        <p className="mt-6 text-center text-lg sm:text-xl md:text-2xl">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِیمِ
        </p>
      )}
      
      <div className="mt-4 text-right text-lg sm:text-xl leading-relaxed">
        {formatText(bigText, noOfAyah, updateProgress)}
      </div>

      <div className="mt-6 flex justify-center">
        <LinkButton to="/suwar" className="px-4 py-2 text-sm sm:text-base md:text-lg">
          &larr; Back to Suwar Page
        </LinkButton>
      </div>
    </div>
  );
}

export default SuwarDetails;
