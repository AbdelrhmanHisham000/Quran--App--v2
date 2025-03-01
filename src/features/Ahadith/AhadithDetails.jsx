import { useLoaderData, useParams } from 'react-router-dom';

import LinkButton from '../../ui/LinkButton';

function AhadithDetails() {
  const Ahadith = useLoaderData();
  const { hadithNo } = useParams();

  return (
    <>
      <div className="mx-auto mt-8 w-full max-w-xl rounded-lg bg-white shadow-lg md:mt-16 md:max-w-3xl">
        <p className="px-4 py-6 text-center text-lg font-semibold leading-relaxed text-gray-800 sm:px-8 sm:py-10 sm:text-xl md:text-2xl">
          {Ahadith[+hadithNo - 1].arab}
        </p>
      </div>
      <div className="mt-6 flex justify-center sm:mt-10 sm:justify-start sm:pl-4">
        <LinkButton to={'/ahadith'}>&larr; Back to Ahadith Page</LinkButton>
      </div>
    </>
  );
}

export default AhadithDetails;

/*
  // <div className="mx-auto mt-20 w-[800px] rounded-lg bg-white shadow-2xl">
    //   <p className="px-10 py-20 text-center text-xl font-bold">
    //     {Ahadith[+hadithNo - 1].arab}
    //   </p>
    // </div>
    // return (
  //   <div className="mx-auto mt-20 w-full max-w-3xl rounded-lg bg-white shadow-2xl">
  //     <p className="px-8 py-12 text-center text-2xl font-bold leading-relaxed text-gray-800">
  //       {Ahadith[+hadithNo - 1].arab}
  //     </p>
  //   </div>
  // );
*/
