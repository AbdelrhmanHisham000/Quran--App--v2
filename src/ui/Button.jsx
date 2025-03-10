import { Link } from 'react-router-dom';

function Button({ children, to, onClick }) {
  const base =
    'rounded-lg bg-white px-2 py-2 text-lg font-medium text-stone-500 shadow-md transition-all duration-300 hover:bg-[#f6f9fe] hover:text-[#174ea6] focus:outline-none focus:ring-4 focus:ring-blue-300 text-center';


  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={base}>
        {children}
      </button>
    );
  }

  return <button className={base}>{children}</button>;
}

export default Button;
