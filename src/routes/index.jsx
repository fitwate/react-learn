import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';

import { Navigate } from 'react-router-dom';
import Detail from '../pages/Detail';
import Detail2 from '../pages/Detail2';
import Message2 from '../pages/Messag2';
import Message3 from '../pages/Messag3';
import Detail3 from '../pages/Detail3';

const routes = [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children:[
          {
            path:'detail/:id/:title/:content',
            element:<Detail/>
          }
        ]
      },
      {
        path: 'message2',
        element: <Message2 />,
        children:[
          {
            path:'detail2',
            element:<Detail2/>
          }
        ]
      },
      {
        path: 'message3',
        element: <Message3 />,
        children:[
          {
            path:'detail3',
            element:<Detail3/>
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]

export default routes