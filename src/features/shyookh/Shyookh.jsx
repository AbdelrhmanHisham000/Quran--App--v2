import { useLoaderData } from 'react-router-dom';
import { getReciters } from '../../services/API';
import ShyookhItem from './ShyookhItem';

function Shyookh() {
  const { reciters } = useLoaderData();
  
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



  return <ShyookhItem recitersDataArr={recitersDataArr} />;
}


export default Shyookh;
