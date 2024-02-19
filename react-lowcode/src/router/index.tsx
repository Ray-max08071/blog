import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import List from '@/pages/Mansge/List';
import Star from '@/pages/Mansge/Star';
import Trash from '@/pages/Mansge/Trash';
import NotFount from '@/pages/NotFount';
import Edit from '@/pages/Question/Edit';
import Stat from '@/pages/Question/Stat';
import Regsition from '@/pages/Regsiter';




import MainLayout from '@/layouts/Main';
import ManageLayout from '@/layouts/Manage';
import QuestionLayout from '@/layouts/Question';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/regsition',
        element: <Regsition />
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'star',
            element: <Star />
          }, {
            path: 'trash',
            element: <Trash />
          },
        ]
      },
      {
        path: '*',
        element: <NotFount />
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat />
      }
    ]
  }
])

export default router;