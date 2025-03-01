import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

function AlazkarItem() {
  const navigate = useNavigate();

  const categories = [
    // 'أدعية الأنبياء',
    // 'أدعية قرآنية',
    'أذكار الاستيقاظ',
    'أذكار الصباح',
    'أذكار المساء',
    'أذكار النوم',
    'أذكار بعد السلام من الصلاة المفروضة',
    'تسابيح',
  ];
  function handleNavigate(category) {
    navigate(`/azkar/${category}`);
  }
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {categories.map((category, index) => (
        <Button onClick={() => handleNavigate(category)} key={index}>
          {category}
        </Button>
      ))}
    </div>
  );
}

export default AlazkarItem;
