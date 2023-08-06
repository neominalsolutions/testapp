import { useRoutes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Users from './pages/Users';


function App() {
  // routing işlemlerini app.js üzerinden halledicez
  const routes = useRoutes([
    {
      path: '',
      element: <Layout />, // layout
      children: [
        {
          path: '',
          element: <>Anasayfa</> // ilk yönlendirilecek olan sayfa
        },
        {
          path: 'about',
          element: <>Hakkımızda</>
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'users/:id',
          element: <>Kullanıcı Detay </>
        }
      ]
    }
  ])

  return routes;
}

export default App;
