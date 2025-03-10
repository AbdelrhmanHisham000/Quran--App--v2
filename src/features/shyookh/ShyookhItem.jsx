import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

function ShyookhItem({ recitersDataArr }) {
  
  const navigate = useNavigate();
  function handleNavigate(sheikhName) {
    navigate(`/shyookh/${sheikhName}`);
  }
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {recitersDataArr.map((el, index) => (
        <Button key={index} onClick={() => handleNavigate(el.name)}>
          {el.name}
        </Button>
      ))}
    </div>
  );
}

export default ShyookhItem;
