export default function formatText(ayahs, noOfAyah, updateProgress) {
  return (
    <div className="my-2 px-10 text-center text-xl leading-[5rem]">
      {ayahs.map((ayah, index) => (
        <span  key={index}>
          <span className="ayah-text">{ayah.text}</span>
          <span
            onClick={() => {
              updateProgress(noOfAyah === index + 1 ? null : index + 1); // Toggle highlight
            }}
            className={
              noOfAyah === index + 1
               ? 'mx-1 cursor-pointer rounded-full bg-yellow-500 p-2 text-xl leading-[8px] text-white'
                : 'mx-1 cursor-pointer rounded-full bg-stone-900 p-2 text-xl leading-[8px] text-white'
            }
          >
            {ayah.number}
          </span>
        </span>
      ))}
    </div>
  );
}

/*
? 'mx-1 cursor-pointer rounded-full bg-yellow-500 p-2 text-xl leading-[8px] text-white'
                : 'mx-1 cursor-pointer rounded-full bg-stone-900 p-2 text-xl leading-[8px] text-white'
                --------------
                ? 'mx-1 inline-block h-10 w-10 cursor-pointer rounded-full bg-yellow-500 text-center text-xl leading-10 text-white'
                : 'mx-0.5 inline-block h-10 w-10 cursor-pointer rounded-full bg-stone-900 text-center text-xl leading-10 text-white'
*/
