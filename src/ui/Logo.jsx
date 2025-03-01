import { Link } from 'react-router-dom';

function Logo({ children }) {
  return (
    <Link
      to={'/'}
      className="text-4xl font-bold uppercase"
      style={{ fontFamily: 'Cinzel Decorative, sans-serif' }}
    >
      {children}
    </Link>
  );
}

export default Logo;
