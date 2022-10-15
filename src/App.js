import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
import Main from './layout/Main';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home /></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/order',
          element: <PrivateRoute><Orders /></PrivateRoute>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
