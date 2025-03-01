// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useEffect, useState } from 'react';

// function GoUp() {
//   const [isVisible, setIsVisible] = useState(false);

//   function toggleVisibility() {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }
//   function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   }
//   useEffect(function () {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);
//   return (
//     <div>
//       {isVisible && (
//         <button
//           aria-label="Scroll back to top"
//           className="fixed bottom-20 right-10 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-center leading-10 text-white shadow-xl transition-all hover:from-blue-600 hover:to-teal-500 active:scale-95"
//           onClick={scrollToTop}
//         >
//           <FontAwesomeIcon className="text-white" icon={faArrowUp} />
//         </button>
//       )}
//     </div>
//   );
// }

// export default GoUp;


import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GoUp() {
  const isVisible = useRef(false);
  const [, forceRender] = useState(0); // Used to trigger re-render only when necessary

  useEffect(() => {
    function handleScroll() {
      requestAnimationFrame(() => {
        const newVisibility = window.scrollY > 1000;
        if (isVisible.current !== newVisibility) {
          isVisible.current = newVisibility;
          forceRender((s) => s + 1); // Trigger re-render only when visibility actually changes
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Scroll back to top"
      className={`hidden lg:flex fixed right-6  h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-xl transition-all hover:from-blue-600 hover:to-teal-500 active:scale-95 ${
        isVisible.current ? "bottom-20 opacity-100" : "bottom-5 opacity-0 pointer-events-none"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
     <FontAwesomeIcon className="text-white" icon={faArrowUp} />
    </button>
  );
}

export default GoUp;