import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import GoUp from './GoUp';

function AppLayout() {
  const navigation = useNavigation(); // Get the navigation state
  const isLoading = navigation.state === 'loading'; // Check if navigation is loading

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {isLoading ? (
          <Loader /> // Show only the loader when loading
        ) : (
          <Outlet /> // Render nested routes when not loading
        )}
      </main>
      <GoUp />
    </div>
  );
}

export default AppLayout;
