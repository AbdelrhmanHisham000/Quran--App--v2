// import { useEffect, useState } from 'react';
// import Button from './Button';

// function Navbar() {
//   const [isFakeDark, setIsFakeDark] = useState(false);
//   useEffect(
//     function () {
//       document.documentElement.classList.toggle('fake-dark-mode');
//     },
//     [isFakeDark],
//   );

//   return (
//     <div className="flex items-center justify-between gap-4">
//       <Button onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}>
//         {isFakeDark ? '☀️' : '🌙'}
//       </Button>
//       <Button to={'/azkar'}>الأذكار</Button>
//       <Button to={'/aladhan'}>مواقيت الصلاة</Button>
//       <Button to={'/ahadith'}>الأحاديث</Button>
//       <Button to={'/suwar'}> القرأن الكريم</Button>
//       <Button to={'/shyookh'}>الاستماع للقرأن الكريم</Button>
//     </div>
//   );
// }

// export default Navbar;


import { useEffect, useState } from 'react';
import Button from './Button';

function Navbar() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('fake-dark-mode', isFakeDark);
  }, [isFakeDark]);

  return (
    <nav className="flex flex-col lg:flex-row items-center lg:gap-6 text-lg">
      {/* Dark Mode Toggle */}
      <Button onClick={() => setIsFakeDark((prev) => !prev)}>
        {isFakeDark ? '☀️' : '🌙'}
      </Button>

      {/* Navigation Links */}
      <Button to="/azkar">الأذكار</Button>
      <Button to="/aladhan">مواقيت الصلاة</Button>
      <Button to="/ahadith">الأحاديث</Button>
      <Button to="/suwar">القرأن الكريم</Button>
      <Button to="/shyookh">الاستماع للقرأن الكريم</Button>
    </nav>
  );
}

export default Navbar;

