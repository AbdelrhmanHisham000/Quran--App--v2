import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Suwar from './features/suwar/Suwar';
import SuwarDetails from './features/suwar/SuwarDetails';

import Home from './ui/Home';
import Ahadith from './features/Ahadith/Ahadith';
import AhadithDetails from './features/Ahadith/AhadithDetails';
import Error from './ui/Error';
import SuwarTafseer from './features/suwar/SuwarTafseer';
import { loader as TafseerLoader } from './features/suwar/SuwarTafseer';
import Aladhan, { loader as AladhanLoader } from './features/Aladhan/Aladhan';
import Alazkar from './features/Alazkar/Alazkar';
import AlazkarDetails from './features/Alazkar/AlazkarDetails';
import Shyookh from './features/shyookh/Shyookh';
import ShyookhDetails from './features/shyookh/ShyookhDetails';

import { Quranloader } from './utils/Loaders';
import { Ahadithloader } from './utils/Loaders';
import { Azkarloader } from './utils/Loaders';
import { Recitersloader } from './utils/Loaders';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shyookh',
        element: <Shyookh />,
        loader: Recitersloader,
      },
      {
        path: 'shyookh/:sheikhName',
        element: <ShyookhDetails />,
        loader: Recitersloader,
      },
      {
        path: '/suwar',
        element: <Suwar />,
        loader: Quranloader,
      },
      {
        path: '/suwar/:suraId',
        element: <SuwarDetails />,
        loader: Quranloader,
      },
      {
        path: '/suwar/tafseer/:suraId',
        element: <SuwarTafseer />,
        loader: TafseerLoader,
      },
      {
        path: '/ahadith',
        element: <Ahadith />,
        loader: Ahadithloader,
      },
      {
        path: '/ahadith/:hadithNo',
        element: <AhadithDetails />,
        loader: Ahadithloader,
      },
      {
        path: '/aladhan',
        element: <Aladhan />,
        loader: AladhanLoader,
      },
      {
        path: '/azkar',
        element: <Alazkar />,
        loader: Azkarloader,
      },
      {
        path: '/azkar/:category',
        element: <AlazkarDetails />,
        loader: Azkarloader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
