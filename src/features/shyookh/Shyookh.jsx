import { useLoaderData } from 'react-router-dom';
import { getReciters } from '../../services/API';
import ShyookhItem from './ShyookhItem';

function Shyookh() {
  const { reciters } = useLoaderData();
  // console.log(reciters[0])
  // console.log(reciters);
  const recitersDataArr = [];
  reciters.map((el) => {
    const recitersData = {
      // Define a new object for each iteration
      name: el.name,
      id: el.id,
      server: el.moshaf[0].server,
    };
    recitersDataArr.push(recitersData);
  });

  // console.log(recitersDataArr);

  return <ShyookhItem recitersDataArr={recitersDataArr} />;
}

// export async function loader() {
//   const Reciters = await getReciters();
//   return Reciters;
// }
export default Shyookh;
